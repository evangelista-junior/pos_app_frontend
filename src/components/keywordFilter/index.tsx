import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { ProductState } from "../../pages/menuPage";
import * as C from "./styles";

type Props = {
  products: ProductState;
  setFilteredProducts: Dispatch<SetStateAction<ProductState>>;
};

const Api = useApi();

export const KeywordFilter = ({ products, setFilteredProducts }: Props) => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordState, setKeywordState] = useState<boolean[]>([]);

  useEffect(() => {
    const updateStates = async () => {
      await Api.getKeywords().then((keys) => {
        let keywords = [...["all categories"], ...keys];
        setKeywords(keywords);

        let newKeywordsState = [true];
        keys.forEach(() => {
          newKeywordsState.push(false);
        });
        setKeywordState(newKeywordsState);
      });
    };

    updateStates();
  }, []);

  const handleKeywordFilter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    let selectKeyword = e.currentTarget.id;
    let idxSelected = keywords.indexOf(selectKeyword);
    let newKeywordState = keywordState.map((keyword, i) =>
      i === idxSelected ? true : false
    );
    setKeywordState(newKeywordState);

    if (selectKeyword !== "all categories") {
      Api.getProductsByKeyword(selectKeyword.replace(" ", "-")).then(
        (dataProducts) => {
          setFilteredProducts(dataProducts);
        }
      );
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <C.KeywordFilters>
      {keywords.length &&
        keywords.map((key, i) => (
          <C.Button
            key={i}
            active={keywordState[i]}
            id={key}
            onClick={(e) => handleKeywordFilter(e)}
          >
            {key}
          </C.Button>
        ))}
    </C.KeywordFilters>
  );
};
