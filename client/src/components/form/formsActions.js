export const refreshFormFields = (formData) => {
        const refreshedData = {...formData}
        for(let key in refreshedData){
                if(key === "errors"){
                    refreshedData[key] = {};
                }
                refreshedData[key] = ''
    }
                return refreshedData;

}