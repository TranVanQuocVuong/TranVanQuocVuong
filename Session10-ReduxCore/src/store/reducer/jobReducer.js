const jobs = JSON.parse(localStorage.getItem("dataJob")) || []

export const jobReducer = (stateJobs = jobs, action) =>{
    switch (action.type) {
        case "add":
            console.log(action.payload);
                let newStateJobs = [...stateJobs]
                newStateJobs.push(action.payload)
                localStorage.setItem("dataJob", JSON.stringify(newStateJobs))
            return newStateJobs;

        case "checkJob":
            const index = stateJobs.findIndex((item)=>{
                return item.id == action.payload
            })
            console.log(index);
            if (index != -1) {
                stateJobs[index].status = !stateJobs[index].status
            }
            console.log(stateJobs[index].status);
            stateJobs = [...stateJobs]
            localStorage.setItem("dataJob", JSON.stringify(stateJobs))
            
        return stateJobs;
    // useSelector kiểm tra xem state có thay đổi không, nếu có thì cập nhật lại UI còn không thì thôi.
        case "deleteJob":
            let deleteConfirm = confirm("bạn có muốn xóa công việc này");
            if (deleteConfirm) {
                const index = stateJobs.findIndex((item)=>{
                    return item.id == action.payload;
                })
                console.log("index", index);
                stateJobs.splice(index, 1);
                stateJobs = [...stateJobs]
                localStorage.setItem("dataJob", JSON.stringify(stateJobs));
                return stateJobs;
            }

        default:
            return stateJobs;
    }
}