import CalendarWrapper from "../Components/CalendarWrapper";
import DynamicWrapper from "../Components/DynamicWrapper";

export default function Page({ children }) {
  return (
    <DynamicWrapper>
      <CalendarWrapper>{children}</CalendarWrapper>
    </DynamicWrapper>
  );
}
