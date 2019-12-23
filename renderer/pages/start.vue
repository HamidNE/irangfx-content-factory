<template>
	<div
		class="container d-flex align-items-center justify-content-center flex-column min-vh-100"
	>
		<form-wizard
			stepSize="sm"
			class="w-100 min-vh-100 d-flex flex-column"
			title=""
			subtitle=""
			nextButtonText="بعدی"
			backButtonText="قبلی"
			finishButtonText="پایان"
			@on-complete="complete"
		>
			<tab-content title="انتخاب نوع">
				<b-form-group id="input-group-3" label="نوع محتوا:" label-for="input-3">
					<b-form-select
						id="input-3"
						v-model="form.type"
						:options="templates"
						required
					></b-form-select>
				</b-form-group>
			</tab-content>
			<tab-content title="انتخاب عنوان">
				<b-form-group label="عنوان:" label-for="input-2">
					<b-form-input
						id="input-2"
						v-model="form.title"
						required
					></b-form-input>
				</b-form-group>
			</tab-content>
			<tab-content title="انتخاب توضیحات">
				<b-form-group label="توضیحات:" label-for="input-textarea">
					<b-form-textarea
						id="input-textarea"
						v-model="form.description"
						rows="3"
						max-rows="6"
					></b-form-textarea>
				</b-form-group>
			</tab-content>
			<tab-content title="دریافت متن">
				<div
					id="text-generated"
					@click="copyText"
					class="text-justify rounded p-3"
					v-html="templateHTML"
				></div>
			</tab-content>
		</form-wizard>
	</div>
</template>

<script>
import templates from "~/data/templates";
import { FormWizard, TabContent } from "vue-form-wizard";
export default {
	components: {
		FormWizard,
		TabContent
	},
	data: () => ({
		form: {},
		templates
	}),
	computed: {
		templateHTML() {
			return (
				"<p>" + this.templateText.replace(/(?:\r\n|\r|\n)/g, "</p><p>") + "</p>"
			);
		},
		templateText() {
			if (!this.form.title || !this.form.description || !this.form.type) {
				return "";
			}
			const template = this.templates.find(
				item => item.value === this.form.type
			);
			const content = template ? template.templates[0].content : "";
			return content
				.replace(/%%title%%/gi, this.form.title)
				.replace(/%%description%%/gi, this.form.description);
		}
	},
	watch: {
		form(value) {
			console.log(value);
		}
	},
	methods: {
		complete() {
			console.log("asdasdasdasd");
		},
		copyText() {
			navigator.clipboard
				.writeText(this.templateText)
				.then(() => alert('متن با موفقیت کپی شد.'));
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
	.wizard-card-footer {
		margin-top: auto;
	}
}
#text-generated {
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background: #00000007;
	}
}
</style>
