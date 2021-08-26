import { ItemAttributes } from "../interfaces";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FC } from "react";
import styled from "styled-components";

export type ItemProps = {
  setSaved: (newVal: ItemAttributes[]) => void;
  saved: ItemAttributes[];
  item: ItemAttributes;
  setSelectedItem: (newVal: ItemAttributes) => void;
};

const ItemContainer = styled.div`
  margin: 1rem 1rem 1rem 0rem;
  transition: 0.3s;
  position: relative;
  :hover {
    z-index: 2;
    transform: scale(1.1);
  }
`;

const ItemImg = styled.img`
  object-fit: contain;
  border-radius: 1.2rem;
  transition: 0.5s;
  position: relative;
  min-width: 200px;
  height: 300px;
  overflow: hidden;
`;

const ItemPreview = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transition: 0.3s;
  z-index: 10;
  font-size: 1.8rem;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;

const SaveIcon = styled.div`
  position: absolute;
  padding: 1rem;
  right: 0;
`;

const PreviewContent = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  cursor: pointer;
  width: 100%;
`;

export const Item: FC<ItemProps> = ({
  setSaved,
  item,
  setSelectedItem,
  saved,
}) => {
  const savedValidation = (item: ItemAttributes) => {
    if (saved && saved.some((i: ItemAttributes) => i.id === item.id)) {
      setSaved(saved.filter((i: ItemAttributes) => i.id !== item.id));
    } else {
      setSaved([...saved, item]);
    }
  };

  return (
    <ItemContainer>
      <ItemPreview>
        <SaveIcon onClick={() => savedValidation(item)}>
          {saved && saved.some((i) => i.id === item.id) ? (
            <BsBookmarkFill />
          ) : (
            <BsBookmark />
          )}
        </SaveIcon>
        <PreviewContent onClick={() => setSelectedItem(item)}></PreviewContent>
      </ItemPreview>
      <ItemImg
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt="poster"
      />
    </ItemContainer>
  );
};