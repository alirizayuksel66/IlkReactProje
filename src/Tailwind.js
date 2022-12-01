import { Button } from "react-bootstrap"

function Tailwind() {
    return (
        <div className="bg-red-500">
            <h3 className="text-xl font-semibold underline">Tailwind Ali Rıza</h3>
            <Button className="flex items-center bg-black text-white/50 hover:!bg-pink-500 px-4 rounded">
                Yüksel
            </Button>
        </div>
    )
}

export default Tailwind