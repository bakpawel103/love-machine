<template>
	<div>
		<v-toolbar color="pink" elevation="7">
			<v-container fluid>
				<v-row>
					<v-col cols="12">
						<h3 style="text-align: center;">
							{{ user.name }}'s points: {{ user.points }}
						</h3>
					</v-col>
				</v-row>
			</v-container>
		</v-toolbar>
		<v-container fluid>
			<v-row>
				<v-col cols="6">
					<v-text-field v-model="tempUserPoints" hide-details />
				</v-col>
				<v-col cols="6">
					<v-btn outlined elevation="2" @click="addUserPoints" text>
						Add points
					</v-btn>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6">
					<h3 style="text-align: center;">
						Orders
					</h3>
				</v-col>
				<v-col cols="6">
					<h3 style="text-align: center;">
						{{ user.name }}'s orders
					</h3>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6">
					<v-container fluid>
						<v-row>
							<v-col cols="12">
								<card-list v-bind:addOrderButtonVisibility="true" v-bind:redeemOrderButtonVisibility="false" @addItem="addUserOrder" @redeemItem="redeemOrder" @removeItem="removeOrder" v-model="orders" #default="{ item }">
									<v-row>
										<v-col cols="12">
											<v-textarea v-model="item.description" label="Description" hide-details />
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
								<v-btn outlined elevation="2" @click="addOrder" text>
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
								<card-list v-bind:addOrderButtonVisibility="false" v-bind:redeemOrderButtonVisibility="true" @addItem="addUserOrder" @redeemItem="redeemOrder" @removeItem="removeUserOrder" v-model="userOrders" #default="{ item }">
									<v-row>
										<v-col cols="12">
											<v-textarea v-model="item.description" label="Description" hide-details />
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
		this.getUser(() => {
			this.getOrders();
			this.getUserOrders();

			this.tempUserPoints = this.user.points;
		});
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
		getUser (callback) {
			axios.get(`${globalVars.serverUrl}/user/${globalVars.defaultUserId}`)
				.then(response => {
					this.user = response.data[0];

					callback();
				});
		},

		getOrders () {
			axios.get(`${globalVars.serverUrl}/user/${globalVars.defaultUserId}/orders`)
				.then(response => {
					this.orders = response.data;
				});
		},

		getUserOrders () {
			axios.get(`${globalVars.serverUrl}/user/${globalVars.defaultUserId}/user_orders`)
				.then(response => {
					this.userOrders = response.data;
				});
		},

		addUserOrder (userOrder) {
			if(this.user.points > 0 && this.user.points >= userOrder.points) {
				axios.post(`${globalVars.serverUrl}/user/${globalVars.defaultUserId}/set_points/${parseInt(this.user.points) - parseInt(userOrder.points)}`)
					.then(() => {
						this.getUser(() => {
							axios.post(`${globalVars.serverUrl}/user/${globalVars.defaultUserId}/user_orders`, userOrder)
								.then(() => {
									this.getUserOrders();
								});
						});
					});
			}
		},

		removeOrder (order) {
			axios.delete(`${globalVars.serverUrl}/user/${globalVars.defaultUserId}/orders/${order.id}`)
				.then(() => {
					this.getOrders();
				});
		},

		removeUserOrder (userOrder) {
			axios.delete(`${globalVars.serverUrl}/user/${globalVars.defaultUserId}/user_orders/${userOrder.id}`)
				.then(() => {
					this.getUserOrders();
				});
		},

		addUserPoints () {
			axios.post(`${globalVars.serverUrl}/user/${globalVars.defaultUserId}/add_points/${this.tempUserPoints}`)
				.then(() => {
					this.getUser(() => {

					});
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
			axios.post(`${globalVars.serverUrl}/user/${globalVars.defaultUserId}/orders`, newOrder)
				.then(() => {
					this.getOrders();
				});
		},

		redeemOrder (order) {
			axios.post(`${globalVars.serverUrl}/user/${globalVars.defaultUserId}/user_orders/${order.id}/redeem`)
				.then(response => {
					console.log(response.data);
				});
			console.log(order);
		}
	}
}
</script>

<style scoped>
</style>
