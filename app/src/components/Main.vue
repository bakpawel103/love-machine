<template>
	<div>
		<v-container fluid>
			<v-row>
				<v-col cols="12">
					<h1 style="text-align: center;">
						{{ user.name }} | Points: {{ user.points }}
					</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="10">
					<v-text-field v-model="tempUserPoints" label="Points to add" hide-details />
				</v-col>
				<v-col cols="2">
					<v-btn @click="addUserPoints" text>
						Add points
					</v-btn>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6">
					<h2 style="text-align: center;">
						Orders
					</h2>
				</v-col>
				<v-col cols="6">
					<h2 style="text-align: center;">
						{{ user.name }}'s orders
					</h2>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6">
					<v-container fluid>
						<v-row>
							<v-col cols="12">
								<card-list v-bind:add-icon="true" @addItem="addUserOrder" @removeItem="removeOrder" v-model="orders" #default="{ item }">
									<v-row>
										<v-col cols="12">
											<v-text-field v-model="item.description" label="Description" hide-details />
										</v-col>
									</v-row>
									<v-row>
										<v-col cols="12">
											<v-text-field v-model="item.points" label="Points" hide-details />
										</v-col>
									</v-row>
								</card-list>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="auto" class="py-0 mx-auto">
								<v-btn @click="addOrder" text>
									<v-icon>
										mdi-plus
									</v-icon>
									Add
								</v-btn>
							</v-col>
						</v-row>
					</v-container>
				</v-col>
				<v-col cols="6">
					<v-container fluid>
						<v-row>
							<v-col cols="12">
								<card-list v-bind:add-icon="false" @addItem="addUserOrder" @removeItem="removeUserOrder" v-model="userOrders" #default="{ item }">
									<v-row>
										<v-col cols="12">
											<v-text-field v-model="item.description" label="Description" hide-details />
										</v-col>
									</v-row>
									<v-row>
										<v-col cols="12">
											<v-text-field v-model="item.points" label="Points" hide-details />
										</v-col>
									</v-row>
								</card-list>
							</v-col>
						</v-row>
					</v-container>
				</v-col>
			</v-row>
		</v-container>
		<AddOrderModal v-show="isModalVisible" @close="closeModal" @addNewOrder="addNewOrder"/>
	</div>
</template>

<script>
import CardList from '@/components/CardList';
import AddOrderModal from '@/components/AddOrderModal';
import axios from 'axios';
import { globalVars } from '../../globalVars';

export default {
	components: {
		CardList,
		AddOrderModal
	},

	created () {
		this.getUser();
		this.getOrders();
		this.getUserOrders();

		this.tempUserPoints = this.user.points;
	},

	data: () => ({
		user: {
			name: "",
			points: 0
		},
		tempUserPoints: 0,
		orders: [ ],
		userOrders: [ ],
		isModalVisible: false
	}),

	methods: {
		getUser () {
			axios.get(`${globalVars.serverUrl}/user`)
				.then(response => {
					console.log(response.data);
					this.user = response.data;
					console.log(this.user);
				});
		},

		getOrders () {
			axios.get(`${globalVars.serverUrl}/orders`)
				.then(response => {
					console.log(response.data);
					this.orders.push(...response.data);
					console.log(this.orders);
				});
		},

		getUserOrders () {
			axios.get(`${globalVars.serverUrl}/user_orders`)
				.then(response => {
					console.log(response.data);
					this.userOrders.push(...response.data);
					console.log(this.userOrders);
				});
		},

		addUserOrder (userOrder) {
			console.log(this.user.points, userOrder.points);
			if(this.user.points >= userOrder.points) {
				axios.post(`${globalVars.serverUrl}/set_points/${parseInt(this.user.points) - parseInt(userOrder.points)}`)
					.then(response => {
						console.log(response.data);
						this.user = response.data;
						console.log(this.user);

						axios.post(`${globalVars.serverUrl}/user_orders`, userOrder)
							.then(response => {
								console.log(response.data);
								this.userOrders = response.data;
								console.log(this.userOrders);
							});
					});
			}
		},

		removeOrder (order) {
			axios.delete(`${globalVars.serverUrl}/orders/${order.id}`)
				.then(response => {
					console.log(response.data);
					this.orders = response.data;
					console.log(this.orders);
				});
		},

		removeUserOrder (userOrder) {
			axios.delete(`${globalVars.serverUrl}/user_orders/${userOrder.id}`)
				.then(response => {
					console.log(response.data);
					this.userOrders = response.data;
					console.log(this.userOrders);
				});
		},

		addUserPoints () {
			axios.post(`${globalVars.serverUrl}/add_points/${this.tempUserPoints}`)
				.then(response => {
					console.log(response.data);
					this.user = response.data;
					console.log(this.user);
				});
		},

		addOrder () {
			this.isModalVisible = true;
		},

		addNewUserOrder () {
			this.isModalVisible = true;
		},

		closeModal () {
			this.isModalVisible = false;
		},

		addNewOrder (newOrder) {
			this.isModalVisible = false;
			axios.post(`${globalVars.serverUrl}/orders`, newOrder)
				.then(response => {
					console.log(response.data);
					this.orders = response.data;
					console.log(this.orders);
				});
		}
	}
}
</script>

<style scoped>

</style>
