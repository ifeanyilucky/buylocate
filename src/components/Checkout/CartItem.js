import {
  CloseButton,
  Flex,
  Link,
  ButtonGroup,
  Button,
  IconButton,
} from '@chakra-ui/react';
import * as React from 'react';
import { PriceTag } from './PriceTag';
import { CartProductMeta } from './CartProductMeta';
import { useStateContext } from '../../context/stateContext';
import { MinusIcon, PlusIcon } from '../svgIcons';

type CartItemProps = {
  isGiftWrapping?: boolean;
  name: string;
  description: string;
  quantity: number;
  price: number;
  currency: string;
  imageUrl: string;
  onChangeQuantity?: (quantity: number) => void;
  onClickGiftWrapping?: () => void;
  onClickDelete?: () => void;
};

export const CartItem = (props: CartItemProps) => {
  const {
    isGiftWrapping,
    name,
    description,
    quantity,
    imageUrl,
    currency,
    price,
    id,
    onChangeQuantity,
    onClickDelete,
  } = props;
  const { toggleCartItemQuantity, onRemove } = useStateContext();
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      justify='space-between'
      align='center'
    >
      <CartProductMeta
        name={name}
        description={description}
        image={imageUrl}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width='full'
        justify='space-between'
        display={{ base: 'none', md: 'flex' }}
      >
        <ButtonGroup variant='ghost' colorScheme='brand'>
          <IconButton
            icon={<MinusIcon />}
            onClick={() => toggleCartItemQuantity(id, 'dec')}
          />
          <Button>{quantity}</Button>
          <IconButton
            icon={<PlusIcon />}
            onClick={() => toggleCartItemQuantity(id, 'inc')}
          />
        </ButtonGroup>
        <PriceTag price={price} currency={currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() => onRemove(id)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt='4'
        align='center'
        width='full'
        justify='space-between'
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize='sm' textDecor='underline'>
          Delete
        </Link>
        <ButtonGroup variant='ghost' colorScheme='brand'>
          <IconButton
            icon={<MinusIcon />}
            onClick={() => toggleCartItemQuantity(id, 'dec')}
          />
          <Button>{quantity}</Button>
          <IconButton
            icon={<PlusIcon />}
            onClick={() => toggleCartItemQuantity(id, 'inc')}
          />
        </ButtonGroup>
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
