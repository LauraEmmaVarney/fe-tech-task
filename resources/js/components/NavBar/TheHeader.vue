<template>
    <header 
        role="banner"
        class="container header-checkout my-5"
    >
        <div class="row mb-2">
            <div 
                v-once
                class="col-12 col-xl-3 my-xl-auto text-center text-xl-left"
            >
                <img 
                    v-if="store.logoUrl" 
                    :src="store.logoUrl" 
                    class="animated fadeInDown faster rounded" 
                    style="max-width:100%; max-height:100px;"
                />
                <h3 
                    v-else 
                    class="mb-0 animated fadeInDown faster"
                >
                    {{ store.name }}
                </h3>
            </div>
            <div class="col-12 col-md-12 col-lg-10 col-xl-8 ml-xl-auto mx-xl-0 mx-auto my-auto px-0 pt-5 pt-xl-0 d-none d-md-block">
                <div class="row">
                    <NavBarItem 
                        :step="1"
                        :active-step="activeStep"
                        label="Your Details"
                        icon="fa-user-circle"
                    />
                    <NavBarItem 
                        :step="2"
                        :active-step="activeStep"
                        label="Card Details"
                        icon="fa-credit-card"
                    />
                    <NavBarItem 
                        :step="3"
                        :active-step="activeStep"
                        label="Success!"
                        icon="fa-check"
                    />
                </div>
            </div>
        </div>
    </header>
</template>

<script>

    import NavBarItem from "./NavBarItem.vue";

    export default {
        name: "HeaderWrapper",
        components: {
            NavBarItem
        },
        props: {
            store: {
                type: Object,
                required: true
            },
            activeStep: {
                type: Number,
                required: true,
            }
        }
    }

</script>