import TrendingList from "../features/trending/TrendingList";
import SuggestionList from "../features/suggestion/SuggestionList";
import useUserControls from "../redux/control/userControls";

function Widget() {
  const { isAuthenticate } = useUserControls();

  return (
    <div>
      <div className="flex flex-col gap-4 bg-inherit text-inherit">
        <TrendingList />
        {isAuthenticate && <SuggestionList />}
      </div>
    </div>
  );
}

export default Widget;
