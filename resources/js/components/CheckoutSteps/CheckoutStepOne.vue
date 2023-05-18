<template>
    <base-card>
        <template v-slot:header>
            <div class="row align-items-center">
                <div class="col-auto">
                    <i class="fal fa-user-circle text-primary fa-2x"/>
                </div>
                <div class="col pl-0">
                    <h5 class="mb-0 font-weight-normal">Your Details</h5>
                </div>
            </div>
        </template>
        <template v-slot:body>
            <div 
                role="form"
                class="p-4"
            >
                <div class="form-group">
                    <label>Name</label>
                    <input 
                        v-model="form.name"
                        type="text" 
                        autocomplete="given-name" 
                        inputmode="text" 
                        placeholder="John Smith" 
                        autofocus
                        class="form-control" 
                    />
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span 
                                class="input-group-text" 
                                id="email-addon"
                            >
                                <i class="fal fa-envelope text-primary" />
                            </span>
                        </div>
                        <input 
                            v-model="form.email"
                            type="email" 
                            autocomplete="email" 
                            inputmode="email" 
                            placeholder="johnsmith@email.com" 
                            class="form-control" 
                        />
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <div class="row align-items-center">
                <div class="col-md-6 col-lg-6 text-md-right">
                    <button 
                        type="submit" 
                        class="btn btn-primary btn-block" 
                        v-on:click="$emit('submitStepOne')"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </template>
    </base-card>
</template>

<script>

import BaseCard from "../Utilities/BaseCard.vue";

    export default {
        name: "CheckoutStepOne",
        components: {
            BaseCard
        },
        props: {
            form: {
                type: Object,
                required: true
            }
        }
    }

</script>