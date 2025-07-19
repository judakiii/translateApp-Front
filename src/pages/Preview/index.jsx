import { useEffect, useState } from "react";
import { TranslatedCard, Dropdown, Input } from "@components";
import { LANGUAGE_OPTIONS } from "@utils/constance";
import {
  SvgArrowDownFillIcon,
  SvgNoDataFillIcon,
  SvgSearchOutlineIcon,
} from "@assets/icons";
import { useLanguage } from "@context";

const TranslatePreview = () => {
  const CHUNK_SIZE = 20;

  const { language, setLanguage } = useLanguage();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [visibleData, setVisibleData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [observerElement, setObserverElement] = useState(null);

  useEffect(() => {
    const SAVED_DATA = JSON.parse(localStorage.getItem("languageData")) || [];
    setData(SAVED_DATA);
  }, []);

  useEffect(() => {
    if (data.length || searchValue !== "") {
      setVisibleData([]);
      setHasMore(true);
      console.log("hihihih");
      loadMoreData();
    }
  }, [data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const SAVED_DATA = JSON.parse(localStorage.getItem("languageData")) || [];
      const FILTERED = SAVED_DATA.filter((item) =>
        item.word.toLowerCase().includes(searchValue.toLowerCase())
      );
      setData(FILTERED);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  // for lazy scroll loading
  useEffect(() => {
    if (!observerElement) return;
    const OBSERVER = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        loadMoreData();
      }
    });
    OBSERVER.observe(observerElement);
    return () => {
      if (observerElement) OBSERVER.unobserve(observerElement);
    };
  }, [observerElement, hasMore, data]);

  const loadMoreData = () => {
    setVisibleData((prev) => {
      const NEXT_CHUNK = data.slice(prev.length, prev.length + CHUNK_SIZE);
      if (NEXT_CHUNK.length === 0) {
        setHasMore(false);
        return prev;
      }
      return [...prev, ...NEXT_CHUNK];
    });
  };

  const SELECTED_LANGUAGE_OPTION = LANGUAGE_OPTIONS.find(
    (opt) => opt.value === language
  );

  return (
    <div className="w-full h-[94dvh] flex flex-col justify-start items-center pt-16">
      <div className="w-full h-[80%] gap-4 bg-white flex flex-col justify-center items-center rounded-xl shadow-md py-8 px-4">
        <section className="w-full flex justify-between items-center flex-nowrap">
          <span className="text-start font-bold text-xl">
            Word Translations
          </span>
          <Dropdown
            endIcon={<SvgArrowDownFillIcon size={16} color="#262489" />}
            selectedValue={SELECTED_LANGUAGE_OPTION}
            options={LANGUAGE_OPTIONS}
            variant={"primary"}
            onSelect={(option) => setLanguage(option.value)}
          />
        </section>
        <Input
          value={searchValue}
          wrapperClassName="w-full"
          className={`w-full`}
          onChange={(e) => setSearchValue(e.target.value)}
          icon={<SvgSearchOutlineIcon color="#bbbbbb" />}
        />
        {visibleData.length > 0 ? (
          <section className="w-full flex flex-col gap-4 overflow-y-auto h-full">
            {visibleData.map((item, index) => (
              <TranslatedCard
                key={index}
                title={item.word}
                subTitle={item?.[language] || "No translate yet"}
              />
            ))}
            {hasMore && (
              <div
                ref={setObserverElement}
                className="h-10 w-full flex justify-center items-center"
              >
                <span className="text-sm text-gray-400">Loading more...</span>
              </div>
            )}
          </section>
        ) : (
          <section className="w-full gap-6 flex flex-col justify-center items-center h-full">
            <SvgNoDataFillIcon size={60} color="#bfbfbf" />
            <span className="text-lg text-third-darker">No Any Words Here</span>
          </section>
        )}
      </div>
    </div>
  );
};

export default TranslatePreview;
