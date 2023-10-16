const Container = (props) => {
    return (
      <div className="
      bg-bg_h
        rounded-lg
        m-1 p-3 
        text-fg1 
        border-2 border-black 
        shadow-lg 
        flex flex-col
        text-xl">
        {props.children}
      </div>
    )
  }

export default Container;