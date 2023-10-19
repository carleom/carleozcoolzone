import Link from "next/link"

const Intro = ({shortdesc}) => {
    return (
      <div className="mb-6">
        <Link href={"/"}>
          <h1 className="text-orange text-4xl pl-1 pt-6 pb-4"><span>carleo</span>&apos;s cool-zone</h1>
        </Link>
        {shortdesc 
        ? <p className="text-fg ml-2">hi, this my blog where I post stuff like projects, thoughts, and stuff I like</p>
        : null
        }
      </div>
    )
}


export default Intro