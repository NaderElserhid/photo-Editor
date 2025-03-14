import { IKImage } from 'imagekitio-react'

const Image = ({path, alt , w, h, className}) => {
  return (
    <IKImage
    urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
    path={path}
    transformation={[
      {
        height: h,
        width: w,
      },
    ]}
    className={className}
    alt={alt}
    loading="lazy"
    lqip={{ active: true, quality: 20 }}
  />
  )
}

export default Image