<template>
    <div 
        id="app"
        class="d-flex flex-column vh-100"
    >
        <the-header 
            :store="store"
            :active-step="checkoutStep"
        />
        <div class="d-flex flex-column vh-100">
            <main 
                role="main" 
                class="container main-checkout pb-3 pb-md-5"
            >
                <div 
                    v-if="items === null" 
                    class="text-center"
                >
                    <i class="fal fa-spinner fa-spin fa-2x" />
                </div>
                <div v-else-if="items.length > 0">
                    <div class="row">
                        <div class="col-12 col-lg-7 d-flex flex-column">
                            <div 
                                v-if="checkoutStep === 1" 
                                class="animated fadeInUp faster"
                            >
                                <checkout-step-one 
                                    :form="form" 
                                    @submitStepOne="stepTwo"
                                />
                            </div>
                            <div v-else-if="checkoutStep === 2" >
                                <checkout-step-two 
                                    :form="form"
                                    :isLoading="isLoading"
                                    @submitStepTwo="processCart"
                                />
                            </div>

                            <div v-else-if="checkoutStep === 3" >
                                <checkout-step-three />
                            </div>
                        </div>
                        <div class="d-flex flex-column col-12 col-lg-5">
                            <checkout-basket 
                                :items="items"
                                :store="store"    
                            />
                        </div> 
                    </div>
                </div>
                <div 
                    v-else 
                    class="card text-center mb-3 mb-md-5 animated fadeInUp faster"
                >
                    <base-card>
                        <template v-slot:body>
                            <div class="row">
                                <div class="col-12 col-lg-10 mx-md-auto">
                                    <i class="border border-primary border-3 rounded-circle p-3 fal fa-shopping-basket text-primary fa-3x mx-auto mb-4" />
                                    <h1 class="font-weight-normal h4 mt-4">Your Basket is Empty!</h1>
                                </div>
                            </div>
                        </template>
                    </base-card>
                </div>
            </main>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

import TheHeader from "./NavBar/TheHeader.vue";
import BaseCard from "./Utilities/BaseCard.vue";
import CheckoutStepOne from "./CheckoutSteps/CheckoutStepOne.vue";
import CheckoutStepTwo from "./CheckoutSteps/CheckoutStepTwo.vue";
import CheckoutStepThree from "./CheckoutSteps/CheckoutStepThree.vue";
import CheckoutBasket from "./CheckoutSteps/CheckoutBasket.vue";

    export default {
        name: "App",
        components: {
            CheckoutBasket,
            BaseCard,
            CheckoutStepOne,
            CheckoutStepTwo,
            CheckoutStepThree,
            TheHeader,
        },
        data() {
            return {
                form : {
                    name : '',
                    email : '',
                    card : '',
                },
                isLoading: false
            }
        },
        computed: mapState({
            items: state => state.checkout.items,
            checkoutStep: state => state.checkout.checkoutStep,
            store: state => state.store.store
        }),
        mounted() {
            this.$store.dispatch('checkout/getBasketItems');
        },
        methods: {
            stepTwo: function () {
                if (this.form.name == '' || this.form.email == '') {
                    this.$swal({title: `Oh no! Something isn't quite right.`, text: "Please complete all fields"});
                } else {
                    this.$store.dispatch('checkout/updateCheckoutStep', 2);
                }
            },
            processCart: function () {
                if (this.form.cardnumber == '') {
                    this.$swal({title: `Oh no! Something isn't quite right.`, text: "Please complete the card number field"});
                } else {
                    this.isLoading = true
                    axios.post("/checkout/pay", this.form)
                        .then(response => {
                            this.isLoading = false;
                            this.$store.dispatch('checkout/updateCheckoutStep', 3);
                        })
                        .catch(error => {
                            this.isLoading = false;
                            let message = '';
                            for (let i in error.response.data.errors) {
                                let thisError = error.response.data.errors[i];
                                message = message + "<br />" + thisError[0];
                            }
                            this.$swal({title: 'Oh no! Something has gone wrong.', html: message});
                        });
                }
            }
        },
    };
</script>
