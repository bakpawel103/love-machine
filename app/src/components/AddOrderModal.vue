<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal" role="dialog">
				<slot name="body">
					<v-container fluid>
						<v-row>
							<v-col cols="12">
								<v-text-field v-model="order.description" label="Description" hide-details />
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<v-text-field v-model="order.points" label="Points" hide-details />
							</v-col>
						</v-row>
					</v-container>
				</slot>

				<slot name="footer">
					<v-container fluid>
						<v-row>
							<v-col cols="6">
								<v-btn outlined elevation="2" @click="close" color="white" text>Close</v-btn>
							</v-col>
							<v-col cols="6">
								<v-btn outlined elevation="2" @click="add" color="white" text>Add</v-btn>
							</v-col>
						</v-row>
					</v-container>
				</slot>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'AddOrderModal',

		data: () => ({
			order: {
				description: "",
				points: 0
			}
		}),

		methods: {
			close() {
				this.$emit('close');
			},

			add() {
				if(this.order.points >= 0) {
					this.$emit('addNewOrder', this.order);
				}
			}
		},
	};
</script>

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background: #e91e63;
		box-shadow: 2px 2px 20px 1px;
		overflow-x: auto;
		display: flex;
		flex-direction: column;
	}

	.modal-header,
	.modal-footer {
		padding: 15px;
		display: flex;
	}

	.modal-header {
		position: relative;
		border-bottom: 1px solid #eeeeee;
		justify-content: space-between;
	}

	.modal-footer {
		border-top: 1px solid #eeeeee;
		flex-direction: column;
	}

	.modal-body {
		position: relative;
		padding: 20px 10px;
	}

	.btn-close {
		position: absolute;
		top: 0;
		right: 0;
		border: none;
		font-size: 20px;
		padding: 10px;
		cursor: pointer;
		font-weight: bold;
		color: #4AAE9B;
		background: transparent;
	}

	.modal-fade-enter,
	.modal-fade-leave-to {
		opacity: 0;
	}

	.modal-fade-enter-active,
	.modal-fade-leave-active {
		transition: opacity .5s ease;
	}
</style>