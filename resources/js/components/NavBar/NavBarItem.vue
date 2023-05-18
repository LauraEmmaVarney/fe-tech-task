<template>
    <div class="col-4 header-checkout-step animated fadeInDown faster">
        <div class="row align-items-center">
            <div class="col-md-5 text-center text-md-right">
                <i 
                    :class="[
                        'border border-3 rounded-circle p-3 fal fa-2x', 
                        icon,
                        isActiveItem ? 'border-primary text-primary' : 'border-secondary text-secondary'
                    ]"
                />
            </div>
            <div class="col-md-7 text-center text-md-left">
                <span 
                    :class="[
                        'mt-2 mt-md-0 badge small font-weight-normal text-uppercase px-0',
                        isActiveItem ? 'text-primary' : 'text-secondary'
                    ]" 
                >
                    Step {{ step }}
                </span>
                <p class="mb-0 d-none d-md-block">{{ label }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBarItem",
        props: {
            label: {
                type: String,
                required: true,
            },
            step: {
                type: Number,
                required: true,
            },
            icon: {
                type: String,
                required: true,
            },
            activeStep: {
                type: Number,
                required: true,
            }
        },
        computed: {
            isActiveItem: function() {
                return this.activeStep === this.step
            }
        },
    }

</script>

<style scoped>

</style>
