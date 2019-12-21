<template>
	<div
		class="container d-flex align-items-center justify-content-center flex-column min-vh-100"
	>
		<form-wizard
			stepSize="sm"
			class="w-100"
			title=""
      shape="tab"
			subtitle=""
			nextButtonText="بعدی"
			backButtonText="قبلی"
			finishButtonText="پایان"
			@on-complete="complete"
		>
			<tab-content title="انتخاب نوع">
				انتخاب نوع
			</tab-content>
			<tab-content title="انتخاب عنوان">
				انتخاب عنوان
			</tab-content>
			<tab-content title="انتخاب توضیحات">
				انتخاب توضیحات
			</tab-content>
		</form-wizard>
	</div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
export default {
	components: {
		FormWizard,
		TabContent
	},
	data: () => ({
		form: {}
	}),
	methods: {
		complete() {
			console.log("asdasdasdasd");
		}
	}
};
</script>

<style src="vue-form-wizard/dist/vue-form-wizard.min.css"></style>
<style lang="scss">
.vue-form-wizard {
	.wizard-nav {
		padding: 0;
	}
	.wizard-progress-bar {
		float: right;
	}
}
</style>
