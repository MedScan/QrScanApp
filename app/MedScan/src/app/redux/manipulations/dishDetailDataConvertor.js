export const mapDishListRawData = (inData) => {
    return {
        dishList: inData.allCourses.map(courseObj => {
            return {
                ...courseObj,
                dish: courseObj.dishDetailRelations.dishes.map(dishObj => {
                    return {
                        ...dishObj,
                        type : dishObj.dishType,
                        photoUrl : dishObj.photoUrls,
                        rate : `₹${dishObj.rateDetalil.price}`
                    };
                })
            };
        })
    };
}

export const mapDishListData = (inData) => {
    return {
        dishList: inData.dishList.map((courseObj) => {
            return {
                ...courseObj,
                dish: courseObj.dish.map((dishObj) => {
                    return {
                        ...dishObj,
                    }
                })
            }
        })
    };
}

export const filterDishListData = (inData, searchValue) => {
    let data = mapDishListData(inData);
    if(data.dishList) {
        data.dishList = data.dishList.filter(courseObj => {
            courseObj.dish = courseObj.dish.filter(dishObj => {
                let result = dishObj.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
                return result;
            });
            return courseObj.dish.length > 0;
        });
    }
    return data;
}