import * as S from './DropdownInput.style';

import { Dispatch, SetStateAction, useState } from 'react';
import IconButton from '~/components/buttons/iconButton/IconButton';
import Text from '~/components/typography/Text';
import { Combine } from '~/types/utils.type';

export type DropdownInputProps = Combine<
  {
    value: string | number;
    setValue: Dispatch<SetStateAction<string | number>>;
    label: string;
    options: number[] | string[];
  },
  React.ComponentProps<'button'>
>;

const DropdownInput = ({
  value,
  setValue,
  label,
  options,
}: DropdownInputProps) => {
  const [showOption, setShowOption] = useState(false);

  const onClickOptionSelect = (selectedOption: number | string) => () => {
    setValue(selectedOption);
    setShowOption(false);
  };

  return (
    <div>
      <S.InputWrapper
        onClick={() => setShowOption(!showOption)}
        showOption={showOption}>
        <Text
          label={
            value
              ? typeof value === 'number'
                ? value.toString()
                : value
              : label
          }
          color={!value ? 'Gray300' : 'Gray500'}
          typography={'PretendardRegular'}
        />
        <S.Icon>
          <IconButton
            iconName="dropdown"
            width={24}
            height={24}
            format="svg"
            rotate={showOption ? 180 : 0}
          />
        </S.Icon>
      </S.InputWrapper>
      {showOption && (
        <S.Dropdown>
          <S.DropdownOptions>
            {options.map((val: string | number, i) => {
              return (
                <S.DropdownOption onClick={onClickOptionSelect(val)} key={i}>
                  {val}
                </S.DropdownOption>
              );
            })}
          </S.DropdownOptions>
        </S.Dropdown>
      )}
    </div>
  );
};

export default DropdownInput;
