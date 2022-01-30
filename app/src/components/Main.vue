<template>
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
							<v-btn @click="add" text>
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
					<v-row>
						<v-col cols="auto" class="py-0 mx-auto">
							<v-btn @click="add" text>
								<v-icon>
									mdi-plus
								</v-icon>
								Add
							</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import CardList from '@/components/CardList';
import axios from 'axios';

export default {
	components: {
		CardList
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
		userOrders: [ ]
	}),

	methods: {
		getUser () {
			axios.get(`https://love-machine-app.herokuapp.com/user`)
				.then(response => {
					console.log(response.data);
					this.user = response.data;
					console.log(this.user);
				});
		},

		getOrders () {
			axios.get(`https://love-machine-app.herokuapp.com/orders`)
				.then(response => {
					console.log(response.data);
					this.orders.push(...response.data);
					console.log(this.orders);
				});
		},

		getUserOrders () {
			axios.get(`https://love-machine-app.herokuapp.com/user_orders`)
				.then(response => {
					console.log(response.data);
					this.userOrders.push(...response.data);
					console.log(this.userOrders);
				});
		},

		addUserOrder (userOrder) {
			if(this.user.point >= userOrder.points) {
				axios.post(`https://love-machine-app.herokuapp.com/set_points`, this.user.point - userOrder.points)
					.then(response => {
						console.log(response.data);
						this.user = response.data;
						console.log(this.user);

						axios.post(`https://love-machine-app.herokuapp.com/user_orders`, userOrder)
							.then(response => {
								console.log(response.data);
								this.userOrders = response.data;
								console.log(this.userOrders);
							});
					});
			}
		},

		removeOrder (order) {
			axios.delete(`https://love-machine-app.herokuapp.com/orders/${order.id}`)
				.then(response => {
					console.log(response.data);
					this.orders = response.data;
					console.log(this.orders);
				});
		},

		removeUserOrder (userOrder) {
			axios.delete(`https://love-machine-app.herokuapp.com/user_orders/${userOrder.id}`)
				.then(response => {
					console.log(response.data);
					this.userOrders = response.data;
					console.log(this.userOrders);
				});
		},

		addUserPoints () {
			axios.post(`https://love-machine-app.herokuapp.com/add_points/${this.tempUserPoints}`)
				.then(response => {
					console.log(response.data);
					this.user = response.data;
					console.log(this.user);
				});
		},

		add () {

		}
	}
}
</script>

<style scoped>
</style>
