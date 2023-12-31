import React from 'react';

const Categories = ({ allCategories, filterItems }) => {
    return (
        <div className='border-b flex justify-center items-center w-full py-3 bg-base-200'>
            {allCategories.map((product_type, index) => {
                return (
                    <a className="btn btn-link no-underline hover:no-underline text-neutral mx-2 hover:bg-[#8f262b] hover:text-base-100 " key={index} onClick={() => filterItems(product_type)} >
                        {product_type}
                    </a>
                );
            })}
        </div>
    )
}

export default Categories;
