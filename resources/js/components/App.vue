<template>
    <div class="d-flex flex-column vh-100">
        <header class="container header-checkout my-5">
            <div class="row mb-2">
                <div class="col-12 col-xl-3 my-xl-auto text-center text-xl-left">
                    <img v-if="store.logoUrl" :src="store.logoUrl" class="animated fadeInDown faster rounded" style="max-width:100%; max-height:100px;"/>
                    <h3 v-else class="mb-0 animated fadeInDown faster">{{ store.name }}</h3>
                </div>
                <div class="col-12 col-md-12 col-lg-10 col-xl-8 ml-xl-auto mx-xl-0 mx-auto my-auto px-0 pt-5 pt-xl-0 d-none d-md-block">
                    <div class="row">
                        <div class="col-4 header-checkout-step animated fadeInDown faster">
                            <div class="row align-items-center">
                                <div class="col-md-5 text-center text-md-right">
                                    <i class="border border-3 rounded-circle p-3 fal fa-user-circle fa-2x" :class="{ 'border-primary text-primary': step === 1, 'border-secondary text-secondary': step !== 1 }"></i>
                                </div>
                                <div class="col-md-7 text-center text-md-left">
                                    <span class="mt-2 mt-md-0 badge small font-weight-normal text-uppercase px-0" :class="{ 'text-primary': step === 1, 'text-secondary': step !== 1 }">Step 1</span>
                                    <p class="mb-0 d-none d-md-block">Your Details</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 header-checkout-step animated fadeInDown faster">
                            <div class="row align-items-center">
                                <div class="col-md-5 text-center text-md-right">
                                    <i class="border border-3 rounded-circle p-3 fal fa-credit-card fa-2x" :class="{ 'border-primary text-primary': step === 2, 'border-secondary text-secondary': step !== 2 }"></i>
                                </div>
                                <div class="col-md-7 text-center text-md-left">
                                    <span class="mt-2 mt-md-0 badge small font-weight-normal text-uppercase px-0" :class="{ 'text-primary': step === 2, 'text-secondary': step !== 2 }">Step 2</span>
                                    <p class="mb-0 d-none d-md-block">Card Details</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 header-checkout-step animated fadeInDown faster">
                            <div class="row align-items-center">
                                <div class="col-md-5 text-center text-md-right">
                                    <i class="border border-secondary border-3 rounded-circle p-3 fal fa-check text-secondary fa-2x" :class="{ 'border-primary text-primary': step === 3, 'border-secondary text-secondary': step !== 3 }"></i>
                                </div>
                                <div class="col-md-7 text-center text-md-left">
                                    <span class="mt-2 mt-md-0 badge text-secondary small font-weight-normal text-uppercase px-0" :class="{ 'text-primary': step === 3, 'text-secondary': step !== 3 }">Step 3</span>
                                    <p class="mb-0 d-none d-md-block">Success!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main role="main" class="container main-checkout pb-3 pb-md-5" id="app">
            <div v-if="items === null" class="text-center">
                <i class="fal fa-spinner fa-spin fa-2x"></i>
            </div>
            <div v-else-if="items.length > 0">
                <div class="row" v-if="step === 1">
                    <div class="col-12 col-lg-7 d-flex flex-column">
                        <div class="animated fadeInUp faster">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col-auto"><i class="fal fa-user-circle text-primary fa-2x"></i></div>
                                        <div class="col pl-0"><h5 class="mb-0 font-weight-normal">Your Details</h5></div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" autocomplete="given-name" class="form-control" v-model="form.name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="email-addon"><i class="fal fa-envelope text-primary"></i></span>
                                            </div>
                                            <input type="email" class="form-control" autocomplete="email" v-model="form.email">
                                        </div>
                                    </div>
                                </div>

                                <div class="card-footer">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-lg-6 text-md-right">
                                            <button type="submit" class="btn btn-primary btn-block" v-on:click="stepTwo">
                                                Continue
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column col-12 col-lg-5">
                        <div>
                            <div class="card w-100 animated fadeInUp faster">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col-auto"><i class="fal fa-shopping-basket text-primary fa-2x"></i></div>
                                        <div class="col pl-0"><h5 class="mb-0 font-weight-normal">Your Items</h5></div>
                                        <div class="d-block d-lg-none col-4 text-right">
                                            <a data-toggle="collapse" href="#collapseOrder" role="button" aria-expanded="false" aria-controls="collapseOrder" class="d-inline-block d-lg-none btn btn-primary btn-sm collapsed">
                                                Show Items
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="collapse d-lg-block" id="collapseOrder">
                                    <div class="card-body p-0">
                                        <div class="table-responsive pt-2 pb-0 mb-0">
                                            <table class="table small mb-0 table-cart">
                                                <thead class="thead-light">
                                                <tr>
                                                    <th>Item</th>
                                                    <th>Price</th>
                                                    <th class="text-right">Quantity</th>
                                                    <th class="text-right">Total</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr class="row-product" v-for="item in items">
                                                    <td>{{ item.name }}</td>
                                                    <td>${{ item.price }}</td>
                                                    <td class="text-right">{{ item.qty }}</td>
                                                    <td class="text-right">{{ store.currencySymbol }}{{ item.rowprice }}</td>
                                                </tr>
                                                </tbody>
                                                <tbody class="border-top border-1">
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td class="text-right">Total:</td>
                                                    <td class="text-right">$ {{basketTotal}}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row" v-if="step === 2">
                    <div class="col-12 col-lg-7 d-flex flex-column">
                        <div class="animated fadeInUp faster">
                            <div class="card">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col-auto"><i class="fal fa-user-circle text-primary fa-2x"></i></div>
                                        <div class="col pl-0"><h5 class="mb-0 font-weight-normal">Card Details</h5></div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-12 col-md-12">
                                            <div class="form-group">
                                                <label>Card Number</label>
                                                <input type="text" autocomplete="given-name" class="form-control" v-model="form.card" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-footer">
                                    <div class="row align-items-center">
                                        <div class="col-md-6 col-lg-6 text-md-right">
                                            <button type="submit" class="btn btn-primary btn-block" v-on:click="processCart">
                                                Pay
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column col-12 col-lg-5">
                        <div>
                            <div class="card w-100 animated fadeInUp faster">
                                <div class="card-header">
                                    <div class="row align-items-center">
                                        <div class="col-auto"><i class="fal fa-shopping-basket text-primary fa-2x"></i></div>
                                        <div class="col pl-0"><h5 class="mb-0 font-weight-normal">Your Items</h5></div>
                                        <div class="d-block d-lg-none col-4 text-right">
                                            <a data-toggle="collapse" href="#collapseOrder" role="button" aria-expanded="false" aria-controls="collapseOrder" class="d-inline-block d-lg-none btn btn-primary btn-sm collapsed">
                                                Show Items
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="collapse d-lg-block" id="collapseOrder">
                                    <div class="card-body p-0">
                                        <div class="table-responsive pt-2 pb-0 mb-0">
                                            <table class="table small mb-0 table-cart">
                                                <thead class="thead-light">
                                                <tr>
                                                    <th>Item</th>
                                                    <th>Price</th>
                                                    <th class="text-right">Quantity</th>
                                                    <th class="text-right">Total</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr class="row-product" v-for="item in items">
                                                    <td>{{ item.name }}</td>
                                                    <td>${{ item.price }}</td>
                                                    <td class="text-right">{{ item.qty }}</td>
                                                    <td class="text-right">{{ store.currencySymbol }}{{ item.rowprice }}</td>
                                                </tr>
                                                </tbody>
                                                <tbody class="border-top border-1">
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td class="text-right">Total:</td>
                                                    <td class="text-right">$ {{basketTotal}}</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" v-if="step === 3">
                    <div class="card text-center mb-3 mb-md-5 col-12 animated fadeInUp faster" style="z-index: 1">
                        <div class="card-body py-md-5 py-3">
                            <div class="row">
                                <div class="col-12 col-lg-10 mx-md-auto">
                                    <i class="border border-primary border-3 rounded-circle p-3 fal fa-check text-primary fa-3x mx-auto mb-4"></i>
                                    <h1 class="font-weight-normal h4 my-4">Your Order Is Complete</h1>
                                    <p>Thank you for youur order!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="card text-center mb-3 mb-md-5 animated fadeInUp faster">
                <div class="card-body py-md-5 py-3">
                    <div class="row">
                        <div class="col-12 col-lg-10 mx-md-auto">
                            <i class="border border-primary border-3 rounded-circle p-3 fal fa-shopping-basket text-primary fa-3x mx-auto mb-4"></i>
                            <h1 class="font-weight-normal h4 mt-4">Your Basket is Empty!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                store : {},
                step : 1,
                items : null,
                form : {
                    name : '',
                    email : '',
                    card : '',
                }
            }
        },
        computed: {
            basketTotal : function() {
                let total = 0;
                for (let i in this.items) {
                    total += this.items[i].rowprice;
                }
                return total;
            }
        },
        methods: {
            stepTwo : function () {
                if (this.form.name == '' || this.form.email == '') {
                    this.$swal("Please complete all fields");
                } else {
                    this.step = 2;
                }
            },
            processCart : function () {
                if (this.form.cardnumber == '') {
                    this.$swal("Please complete all fields");
                } else {
                    axios.post("/checkout/pay", this.form).then(response => {
                        this.step = 3;
                    }).catch(error => {
                        let message = '';
                        for (let i in error.response.data.errors) {
                            let thisError = error.response.data.errors[i];
                            message = message + "<br />" + i + ": " + thisError[0];
                        }
                       this.$swal(message);
                    });
                }
            }
        },
        mounted() {
            this.store = window.tebex.store;
            axios.get("/checkout/items").then(response => {
                this.items = response.data;
            });
        },
        components: {
        },
        name: "App"
    }

</script>

<style scoped>

</style>
