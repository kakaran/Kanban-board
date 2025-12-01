import * as Yup from "yup";

export const validationSchema = Yup.object({
  jobTitle: Yup.string()
    .required("Job title is required")
    .min(2, "Job title must be at least 2 characters"),

  companyName: Yup.string()
    .required("Company name is required")
    .min(2, "Company name must be at least 2 characters"),

  jobUrl: Yup.string().url("Enter a valid URL"),

  section: Yup.string().required("Section is required"),

  salary: Yup.string()
    .matches(/^[0-9]+$/, "Only numbers allowed")
    .required("Salary is required"),
  location: Yup.string(),

  description: Yup.string().min(
    10,
    "Description must be at least 10 characters"
  ),
});
