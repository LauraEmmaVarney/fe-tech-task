<template>
    <base-card>
        <template v-slot:body>
            <div class="p-4">
                <div class="row">
                    <div class="col-12 col-lg-10 mx-md-auto">
                        <i class="border border-primary border-3 rounded-circle p-3 fal fa-check text-primary fa-3x mx-auto mb-4" />
                        <h1 class="font-weight-normal h4 my-4">Your Order Is Complete</h1>
                        <p>Thank you for youur order!</p>
                    </div>
                </div>
            </div>
        </template>
    </base-card>
</template>

<script>

import BaseCard from "../Utilities/BaseCard.vue";

    export default {
        name: "CheckoutStepThree",
        components: {
            BaseCard
        },
    }

</script>