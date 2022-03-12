import { FC } from 'react';
import { PATH_NAME } from '../../config';
import { useRouter } from '../../hooks/common/useRouter';

export interface BrandProps {
  brand_image?: string;
  w?: number | string;
  h?: number | string;
}

export const Brand: FC<BrandProps> = ({ w, h, brand_image, ...props }) => {
  const router = useRouter();
  const brandDiv = {
    width: w ?? '160px',
    height: h ?? '40px',
    cursor: 'pointer',
  };

  const handleHome = () => {
    router.push(PATH_NAME.HOME);
  };

  return (
    <div style={brandDiv}>
      <img onClick={handleHome} src={brand_image} alt="" />
    </div>
  );
};
