<template>
    <div class="card w-100 animated fadeInUp faster">
        <div class="card-header">
            <div class="row align-items-center">
                <slot name="header"></slot>
            </div>
        </div>
        <div 
            id="collapseOrder"
            class="" 
        >
            <div class="card-body p-0">
                <slot name="body"></slot>
            </div>
            <div class="card-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseCard",
    }
</script>