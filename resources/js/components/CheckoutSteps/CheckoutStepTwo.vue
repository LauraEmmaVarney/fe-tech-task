<template>
    <base-card>
        <template v-slot:header>
            <div class="row align-items-center">
                <div class="col-auto">
                    <i class="fal fa-user-circle text-primary fa-2x"/>
                </div>
                <div class="col pl-0">
                    <h5 class="mb-0 font-weight-normal">Card Details</h5>
                </div>
            </div>
        </template>
        <template v-slot:body>
            <div 
                v-if="!isLoading"
                role="form"
                class="p-4"
            >
                <div class="form-group">
                    <label>Card Number</label>
                    <input 
                        v-model="form.card"
                        type="tel" 
                        inputmode="numeric" 
                        autocomplete="cc-number" 
                        maxlength="16" 
                        placeholder="xxxx xxxx xxxx xxxx"
                        class="form-control" 
                    />
                </div>
            </div>
            <div v-else>
                <div class="text-center">
                    <i class="fal fa-spinner fa-spin fa-2x" />
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <div
                v-if="!isLoading"
                class="row align-items-center"
            >
                <div class="col-md-6 col-lg-6 text-md-right">
                    <button 
                        type="submit" 
                        class="btn btn-primary btn-block" 
                        v-on:click="$emit('submitStepTwo')"
                    >
                        Pay
                    </button>
                </div>
            </div>
        </template>
    </base-card>
</template>

<script>

import BaseCard from "../Utilities/BaseCard.vue";

    export default {
        name: "CheckoutStepTwo",
        components: {
            BaseCard
        },
        props: {
            form: {
                type: Object,
                required: true
            },
            isLoading: {
                type: Boolean,
                required: true
            }
        }
    }

</script>