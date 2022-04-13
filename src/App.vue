<script setup lang="ts">
import useApp from "@hooks/common/useApp"
</script>

<template>
    <n-message-provider>
        <RouterView v-slot="{ Component, route }">
            <template v-if="Component">
                <!-- <WebHead v-show="!route.meta.hideHead"></WebHead> -->
                <Transition mode="out-in">
                    <Suspense>
                        <template #default>
                            <!-- 主要内容 -->
                            <component :is="Component"></component>
                        </template>

                        <!-- 加载中状态 -->
                        <template #fallback>
                            <div h-full class="flex-center">正在加载...</div>
                        </template>
                    </Suspense>
                </Transition>
            </template>
        </RouterView>
    </n-message-provider>
</template>

<style lang="less"></style>
