const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleShoeClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) changeBigShoeImage(imgURL.bigShoe)
  }

  return (
    <div className={`border-2 rounded-xl ${bigShoeImage === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleShoeClick}>
      <div className="bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 flex justify-center items-center">
        <img src={imgURL.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain"/>
      </div>
    </div>
  )
}

export default ShoeCard
