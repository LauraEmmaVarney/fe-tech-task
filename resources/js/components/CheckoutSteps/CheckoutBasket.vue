<template>
    <base-card>
        <template v-slot:header>
            <div class="row align-items-center">
                <div class="col-auto">
                    <i class="fal fa-shopping-basket text-primary fa-2x"/>
                </div>
                <div class="col pl-0">
                    <h5 class="mb-0 font-weight-normal">Your Items</h5>
                </div>
            </div>
        </template>
        <template v-slot:body>
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
                    <tr 
                        v-for="(item, index) in items"
                        :key="index"
                        class="row-product"
                    >
                        <td>{{ item.name }}</td>
                        <td>${{ item.price }}</td>
                        <td class="text-right">{{ item.qty }}</td>
                        <td class="text-right">{{ store.currencySymbol }}{{ item.rowprice }}</td>
                    </tr>
                    <tr class="border-top border-1">
                        <td></td>
                        <td></td>
                        <td class="text-right">Total:</td>
                        <td class="text-right">$ {{basketTotal}}</td>
                    </tr>
                </tbody>
            </table>
        </template>
    </base-card>
</template>

<script>

import BaseCard from "../Utilities/BaseCard.vue";

    export default {
        name: "CheckoutBasket",
        components: {
            BaseCard
        },
        props: {
            items: {
                type: Array,
            },
            store: {
                type: Object,
                required: true,
            }
        },
        computed: {
            basketTotal: function() {
                let total = 0;
                for (let i in this.items) {
                    total += this.items[i].rowprice;
                }
                return total;
            }
        },
    }

</script>
