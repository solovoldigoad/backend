import { asyncHandler} from "../utils/asyncHandler";

const registerUsre = asyncHandler( async (req,res) => {
    res.status(200).json({
        message: "ok"
    })
})
export {registerUsre}