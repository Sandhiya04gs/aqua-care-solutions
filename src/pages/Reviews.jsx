
import usePageTitle from "../hooks/usePageTitle";
import ReviewsSection from "../components/ReviewsSection";

export default function Reviews() {
  usePageTitle(
    "Customer Reviews | Aqua Care Solutions",
    "Read genuine customer feedback about Aqua Care Solutions RO sales and service."
  );

  return <ReviewsSection page />;
}
