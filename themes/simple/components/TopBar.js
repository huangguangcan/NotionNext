import CONFIG_SIMPLE from '../config_simple'

/**
 * 网站顶部 提示栏
 * @returns
 */
export const TopBar = (props) => {
  if (CONFIG_SIMPLE.TOP_BAR_CONTENT) {
    return <header className="flex justify-center items-center bg-black dark:bg-hexo-black-gray">
       <div id='top-bar-inner' className='max-w-9/10 w-full'>
       <div className='text-xs text-center float-left text-white z-50 leading-5 py-2.5' dangerouslySetInnerHTML={{ __html: CONFIG_SIMPLE.TOP_BAR_CONTENT }}/>
       </div>
    </header>
  }
  return <></>
}
