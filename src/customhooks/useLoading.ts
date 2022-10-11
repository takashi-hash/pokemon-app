import { useState } from "react";

const useLoading = (initialState: boolean) => {
    const [loading, setLoading] = useState<boolean>(initialState);
    return {loading, setLoading}
}

export default useLoading;