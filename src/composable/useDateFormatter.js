import { computed, toValue } from "vue";

const dateOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
};
const locales = "en-US";

export function useDateFormatter(dateInput) {
  const formattedDate = computed(() => {
    const date = toValue(dateInput);

    if (date && date instanceof Date) {
      return date.toLocaleDateString(locales, dateOptions);
    }
    return "";
  });

  return { formattedDate };
}
