export const PET = ['강아지', '고양이', '햄스터'];

export const petMaps = {
  DOG: '강아지',
  CAT: '고양이',
  FISH: '물고기',
  BIRD: '새',
  HAMSTER: '햄스터',
  RABBIT: '토끼',
  GUINEA_PIG: '기니피그',
  LIZARD: '도마뱀',
  FROG: '개구리',
};

export const invertedPetMaps = Object.fromEntries(
  Object.entries(petMaps).map(([key, value]) => [value, key]),
);
