import { useEffect, useState } from "react";
import { AuthContextType } from "../../contexts/Auth/AuthContext";
import * as C from "./styles";
import $ from "jquery";
import { MoreInfoModal } from "../../components/moreInfoModal";
import { useApi } from "../../hooks/useApi";
import { Product } from "../../types/product";
import { KeywordFilter } from "../../components/keywordFilter";

import cake from "../../store/images/temp/cake.jpg";
import donuts from "../../store/images/temp/donuts.jpg";

const Api = useApi();

type Props = {
  auth: AuthContextType;
  currentDayOfWeek: string;
};

export type ProductState = {
  [key: string]: Product[];
};

// Create our number formatter.
export const formatAsPrice = (number: number | undefined) => {
  if (number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "AUD",
    }).format(number);
  }
};

export const MenuPage = ({ auth, currentDayOfWeek }: Props) => {
  const [showMoreInfoModal, setShowMoreInfoModal] = useState<boolean>(false);
  const [productSingleInfo, setProductsingleInfo] = useState<Product>();
  const [productCategories, setProductCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<ProductState>({});
  const [filteredProducts, setFilteredProducts] = useState<ProductState>({});

  useEffect(() => {
    const updateStates = async () => {
      await Api.getProductCategories().then((categories) => {
        setProductCategories(categories);
      });
      await Api.getListProducts().then((productsData) => {
        setProducts(productsData);
        setFilteredProducts(productsData);
      });
    };

    updateStates();
  }, []);

  const handleShowModal = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    let productId = e.currentTarget.id;

    if (!showMoreInfoModal) {
      await Api.getProductInfo(productId).then((productInfo) => {
        setProductsingleInfo(productInfo[0]);
        setShowMoreInfoModal(true);

        $("#list-photos--Modal-more-info").animate(
          {
            scrollLeft: 0,
          },
          800
        );
      });
    }
  };

  return (
    <C.MenuContent>
      <MoreInfoModal
        InfoModalState={[showMoreInfoModal, setShowMoreInfoModal]}
        MoreInfoProduct={productSingleInfo}
      />
      <C.Saudation>
        Hi <b>{auth.user?.name}</b>, have a great {currentDayOfWeek} 😄
      </C.Saudation>

      <C.RepeatLastOrderCTA>
        I'd like to repeat the last order
      </C.RepeatLastOrderCTA>

      <C.Divider />

      <KeywordFilter
        products={products}
        setFilteredProducts={setFilteredProducts}
      />

      <C.CategoriesList>
        <C.CategorySingle>
          <C.CategoryTitle>suggestions specially for you</C.CategoryTitle>

          <C.ItemsList>
            <C.CardItem onClick={handleShowModal}>
              <C.ItemImage src={cake} />
              <C.ItemTitle>
                chocolate w/ strawberry
                <C.ItemAdtInfo> - a delicious chocolate cake...</C.ItemAdtInfo>
              </C.ItemTitle>
              <C.PriceTime>
                <C.Price>$20.00</C.Price>
                <C.Time>30 min</C.Time>
              </C.PriceTime>
            </C.CardItem>

            <C.CardItem onClick={handleShowModal}>
              <C.ItemImage src={donuts} />
              <C.ItemTitle>
                donuts
                <C.ItemAdtInfo>
                  {" "}
                  - delicious donuts of various flavors...
                </C.ItemAdtInfo>
              </C.ItemTitle>
              <C.PriceTime>
                <C.Price>$5.00</C.Price>
                <C.Time>5 min</C.Time>
              </C.PriceTime>
            </C.CardItem>

            <C.CardItem onClick={handleShowModal}>
              <C.ItemImage src={cake} />
              <C.ItemTitle>
                chocolate w/ strawberry
                <C.ItemAdtInfo> - a delicious chocolate cake...</C.ItemAdtInfo>
              </C.ItemTitle>
              <C.PriceTime>
                <C.Price>$20.00</C.Price>
                <C.Time>30 min</C.Time>
              </C.PriceTime>
            </C.CardItem>
          </C.ItemsList>
        </C.CategorySingle>

        {productCategories.length &&
          productCategories.map((category, i) => (
            <C.CategorySingle key={i}>
              {filteredProducts[category] &&
              filteredProducts[category].length ? (
                <>
                  <C.CategoryTitle>{category}</C.CategoryTitle>

                  <C.ItemsList>
                    {Object.keys(filteredProducts).length &&
                      filteredProducts[category].map((product: Product, i) => (
                        <C.CardItem
                          key={i}
                          onClick={(e) => handleShowModal(e)}
                          id={product._id}
                        >
                          <C.ItemImage src={product.principalPic} />
                          <C.ItemTitle>
                            {product.title}
                            <C.ItemAdtInfo>
                              {" "}
                              - {product.description.slice(0, 45)}...
                            </C.ItemAdtInfo>
                          </C.ItemTitle>
                          <C.PriceTime>
                            <C.Price>{formatAsPrice(product.price)}</C.Price>
                            <C.Time>{product.prepareTime} min</C.Time>
                          </C.PriceTime>
                        </C.CardItem>
                      ))}
                  </C.ItemsList>
                </>
              ) : (
                ""
              )}
            </C.CategorySingle>
          ))}
      </C.CategoriesList>
    </C.MenuContent>
  );
};
