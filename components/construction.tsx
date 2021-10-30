import Image from 'next/image'
import UnderConstruction from '../public/images/underconstruction.png'

const Construction = () => {
    return (
        <div className="container">
            <Image src={UnderConstruction} width="500px" height="500px" />
            <style jsx>{`
                .container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

export default Construction
