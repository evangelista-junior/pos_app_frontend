import * as C from "./styles";
import PlusIcon from "../../store/images/Icons/plus.png";
import { Product } from "../../types/product";
import { formatAsPrice } from "../../pages/menuPage";

type Props = {
  InfoModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  MoreInfoProduct: Product | undefined;
};

export const MoreInfoModal = ({ InfoModalState, MoreInfoProduct }: Props) => {
  const [showMoreInfoModal, setShowMoreInfoModal] = InfoModalState;

  const handleShowModal = () => {
    setShowMoreInfoModal(!showMoreInfoModal);
  };
  return (
    <C.ModalMask display={showMoreInfoModal}>
      <C.ModalContainer>
        <C.ModalCloseIcon onClick={handleShowModal}>X</C.ModalCloseIcon>
        <C.ListPhotos id="list-photos--Modal-more-info">
          <C.Photo src={MoreInfoProduct?.principalPic} />

          {MoreInfoProduct?.secondaryPics.length &&
            MoreInfoProduct?.secondaryPics.map((photo, i) => (
              <C.Photo key={i} src={photo} />
            ))}
        </C.ListPhotos>
        <C.Title>{MoreInfoProduct?.title}</C.Title>
        <C.Description>{MoreInfoProduct?.description}</C.Description>
        <C.ForecastTime>
          add to bag and confirm to receive until 8:37PM
        </C.ForecastTime>
        <C.Wrapper>
          <C.Button>
            {formatAsPrice(MoreInfoProduct?.price)}
            <C.Icon src={PlusIcon} />
          </C.Button>
        </C.Wrapper>
      </C.ModalContainer>
    </C.ModalMask>
  );
};
