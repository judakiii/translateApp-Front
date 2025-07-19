import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Dropdown, Button, Input, TransitionBox } from "@components";
import {
  SvgArrowDownOutlineIcon,
  SvgPlusOutlineIcon,
  SvgCheckOutlineIcon,
  SvgAddDataIcon,
} from "@assets/icons";
import { LANGUAGE_OPTIONS } from "@utils/constance";
import { useLanguage } from "@context";
import { zodResolver } from "@hookform/resolvers/zod";
import { FORM_SCHEMA } from "@utils/validation/schema";

const TranslateManagement = () => {
  const INITIAL_VALUE = {
    wordValue: "",
    faValue: "",
    chValue: "",
    deValue: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(FORM_SCHEMA),
    mode: "onChange",
    defaultValues: INITIAL_VALUE,
  });

  const { language, setLanguage } = useLanguage();

  const [data, setData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [observerElement, setObserverElement] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateList, setIsUpdateList] = useState(false);
  const [submitValue, setSubmitValue] = useState("insert");
  const [draggedIndex, setDraggedIndex] = useState(null);

  const WATCHES_VALUE = watch();
  const FORM_VALIDATION_RESULTS = FORM_SCHEMA.safeParse(WATCHES_VALUE);
  const CHUNK_SIZE = 20;

  useEffect(() => {
    const SAVED_DATA = JSON.parse(localStorage.getItem("languageData")) || [];
    setData(SAVED_DATA);
  }, []);

  useEffect(() => {
    if (data.length) {
      setVisibleData([]);
      setHasMore(true);
      loadMoreData();
    }
  }, [data]);

  // for lazy loading
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

  const handleInsert = (dataFormat) => {
    const NEW_DATA = [dataFormat, ...data];
    setData(NEW_DATA);
    localStorage.setItem("languageData", JSON.stringify(NEW_DATA));
  };

  const handleUpdate = (dataFormat) => {
    const UPDATED_DATA = data.map((item) =>
      item.word === dataFormat.word ? { ...dataFormat } : item
    );
    setData(UPDATED_DATA);
    localStorage.setItem("languageData", JSON.stringify(UPDATED_DATA));
  };

  const handleDelete = (word) => {
    const UPDATED = data.filter((item) => item.word !== word);
    setData(UPDATED);
    localStorage.setItem("languageData", JSON.stringify(UPDATED));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const ACTION = e.nativeEvent.submitter?.value;

    handleSubmit((formData) => {
      const DATA_FORMAT = {
        word: formData.wordValue,
        fa: formData.faValue || "",
        ch: formData.chValue || "",
        de: formData.deValue || "",
      };

      switch (ACTION) {
        case "insert":
          handleInsert(DATA_FORMAT);
          break;
        case "update":
          handleUpdate(DATA_FORMAT);
          break;
        case "delete":
          handleDelete(DATA_FORMAT.word);
          break;
        default:
          break;
      }

      setSubmitValue(ACTION);
      setIsUpdateList(true);
      reset();
      setTimeout(() => {
        setIsOpen(false);
        setTimeout(() => setIsUpdateList(false), 300);
      }, 2000);
    })(e);
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragEnter = (targetIndex) => {
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const UPDATED_DATA = [...visibleData];
    const [movedItem] = UPDATED_DATA.splice(draggedIndex, 1);
    UPDATED_DATA.splice(targetIndex, 0, movedItem);
    setDraggedIndex(targetIndex);
    setVisibleData(UPDATED_DATA);
    localStorage.setItem("languageData", JSON.stringify(UPDATED_DATA));
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const SELECTED_LANGUAGE_OPTION = LANGUAGE_OPTIONS.find(
    (opt) => opt.value === language
  );

  return (
    <div className="w-full h-[94dvh] flex flex-col justify-start items-center py-6 gap-4">
      <section className="w-full flex justify-between items-center flex-nowrap">
        <span className="text-start font-bold text-xl">
          Translation Management
        </span>
        <Dropdown
          startIcon={<SvgArrowDownOutlineIcon size={18} color="#888888" />}
          selectedValue={SELECTED_LANGUAGE_OPTION}
          options={LANGUAGE_OPTIONS}
          variant={"secondary"}
          onSelect={(option) => setLanguage(option.value)}
        />
      </section>

      <div className="w-full flex-grow bg-white flex flex-col text-gray-500 justify-center items-center rounded-xl shadow-md py-5 px-4 mb-2 overflow-hidden">
        {visibleData.length > 0 ? (
          <section className="w-full flex flex-col overflow-y-auto flex-grow">
            {visibleData?.map((item, index) => {
              const isEmptyValue = !item?.[language];
              const isLastItem = index !== visibleData.length - 1;
              return (
                <div
                  key={index}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragEnter={() => handleDragEnter(index)}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    reset({
                      wordValue: item.word,
                      faValue: item?.fa || "",
                      chValue: item?.ch || "",
                      deValue: item?.de || "",
                    });
                    setSubmitValue("update");
                    setIsOpen(true);
                  }}
                  className={`w-full flex justify-between items-center ${
                    isLastItem && "border-b border-third-dark"
                  } 
                  ${index === 0 ? "pb-5" : "py-5"}
                  ${
                    draggedIndex === index
                      ? "font-bold shadow-lg relative rotate-1"
                      : ""
                  }
                  `}
                >
                  <span
                    className={`text-base text-black ${
                      isEmptyValue && "text-secondary"
                    }`}
                  >
                    {item.word}
                  </span>
                  <Input
                    value={item?.[language] || "....."}
                    wrapperClassName="w-32"
                    disabled={true}
                    className={`${
                      isEmptyValue && "!bg-secondary text-white"
                    } !text-center`}
                  />
                </div>
              );
            })}

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
          <section className="w-full gap-6 flex flex-col justify-center items-center flex-grow">
            <SvgAddDataIcon size={60} color="#bfbfbf" />
            <span className="text-lg text-third-darker">
              Add Your First Word
            </span>
          </section>
        )}
      </div>
      <Button
        isFullWidth={true}
        size="large"
        startIcon={<SvgPlusOutlineIcon />}
        onClick={() => {
          reset(INITIAL_VALUE);
          setIsOpen(true);
          setSubmitValue("insert");
        }}
      >
        Add Keyword
      </Button>

      <TransitionBox
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
          setTimeout(() => {
            setIsUpdateList(false);
          }, 300);
        }}
      >
        {!isUpdateList ? (
          <form
            className="w-full flex flex-col justify-center items-center px-4 gap-1"
            onSubmit={onSubmitForm}
          >
            <Input
              label="Word"
              {...register("wordValue")}
              wrapperClassName="w-full"
              errorMessage={errors?.wordValue?.message}
              isRequired={true}
              disabled={submitValue === "update"}
              isHaveErrorMessage={true}
            />
            <Input
              label="Persian"
              {...register("faValue")}
              wrapperClassName="w-full"
              errorMessage={errors?.faValue?.message}
              isHaveErrorMessage={true}
            />
            <Input
              label="Chinesse"
              {...register("chValue")}
              wrapperClassName="w-full"
              errorMessage={errors?.chValue?.message}
              isHaveErrorMessage={true}
            />
            <Input
              label="Germany"
              {...register("deValue")}
              wrapperClassName="w-full"
              errorMessage={errors?.deValue?.message}
              isHaveErrorMessage={true}
            />
            {submitValue === "insert" ? (
              <Button
                type="submit"
                isFullWidth
                size="large"
                className="mt-4"
                disabled={!FORM_VALIDATION_RESULTS.success}
                value="insert"
              >
                Submit
              </Button>
            ) : (
              <div className="w-full flex items-center gap-2">
                <Button
                  type="submit"
                  isFullWidth
                  variant="third"
                  size="large"
                  className="mt-4"
                  disabled={!FORM_VALIDATION_RESULTS.success}
                  value="delete"
                >
                  Delete
                </Button>
                <Button
                  type="submit"
                  isFullWidth
                  size="large"
                  className="mt-4"
                  disabled={!FORM_VALIDATION_RESULTS.success}
                  value="update"
                >
                  Update
                </Button>
              </div>
            )}
          </form>
        ) : (
          <div className="animate-fade-in-scale w-full flex flex-col justify-center items-center gap-10 px-8 h-[432px]">
            <SvgCheckOutlineIcon size={100} color={"#15803D"} />
            <div className="flex w-full text-xl font-semibold flex-nowrap">
              {submitValue === "insert" ? (
                <h2>Insert a Word Was SuccessFully</h2>
              ) : submitValue === "update" ? (
                <h2>Updated a Word Was SuccessFully</h2>
              ) : (
                <h2>Delete an Item Was SuccessFully</h2>
              )}
            </div>
          </div>
        )}
      </TransitionBox>
    </div>
  );
};

export default TranslateManagement;
