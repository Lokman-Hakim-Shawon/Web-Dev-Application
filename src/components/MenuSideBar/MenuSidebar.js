
const MenuSidebar = () => {
    return (
        <div className="">
            <h1 className='text-xl text-center p-3 bg-primary text-white rounded-t-2xl'>Category</h1>
            
            <div className='flex items-center'>
              <input type="text" className="border-2 py-2 pl-2 ml-1 mt-3" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70 -ml-6 mt-2"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </div>

            <div className="collapse  my-3 rounded-none ">
               <input type="radio" name="my-accordion-1" defaultChecked /> 
               <div className="collapse-title text-xs bg-base-200">
                 Dua s importance
               </div>
               <div className="collapse-content space-y-3"> 
                 <li className='list-dics text-primary '>The servent is dependence on his lord</li>
                 <li className='list-dics text-primary '>The most importent think to ask allah for</li>
                 <li className='list-dics text-primary '>ask for paradice & projection from fire.</li>
                 <li className='list-dics text-primary '>Dua to remain steadfast on the religion</li>
               </div>
            </div>
            {/* 2nd part */}
            <div className="collapse  my-3 rounded-none">
               <input type="radio" name="my-accordion-1" defaultChecked /> 
               <div className="collapse-title text-xs bg-base-200">
                 Dua s importance
               </div>
               <div className="collapse-content space-y-3"> 
                 <li className='list-dics text-primary '>The servent is dependence on his lord</li>
                 <li className='list-dics text-primary '>The most importent think to ask allah for</li>
                 <li className='list-dics text-primary '>ask for paradice & projection from fire.</li>
               </div>
            </div>
            {/* 3rd part */}
            <div className="collapse  my-3 rounded-none">
               <input type="radio" name="my-accordion-1" defaultChecked /> 
               <div className="collapse-title text-xs bg-base-200">
                 Dua s importance
               </div>
               <div className="collapse-content space-y-3"> 
                 <li className='list-dics text-primary '>The servent is dependence on his lord</li>
                 <li className='list-dics text-primary '>The most importent think to ask allah for</li>
                 <li className='list-dics text-primary '>ask for paradice & projection from fire.</li>
               </div>
            </div>
            {/* 4th part */}
            <div className="collapse  my-3 rounded-none">
               <input type="radio" name="my-accordion-1" defaultChecked /> 
               <div className="collapse-title text-xs bg-base-200">
                 Dua s importance
               </div>
               <div className="collapse-content space-y-3"> 
                 <li className='list-dics text-primary '>The servent is dependence on his lord</li>
                 <li className='list-dics text-primary '>The most importent think to ask allah for</li>
                 <li className='list-dics text-primary '>ask for paradice & projection from fire.</li>
               </div>
            </div>
            {/* 5th part */}
            <div className="collapse  my-3 rounded-none">
               <input type="radio" name="my-accordion-1" defaultChecked /> 
               <div className="collapse-title text-xs bg-base-200">
                 <h1>Dua s importance</h1>
               </div>
               <div className="collapse-content space-y-3"> 
                 <li className='list-dics text-primary '>The servent is dependence on his lord</li>
                 <li className='list-dics text-primary '>The most importent think to ask allah for</li>
                 <li className='list-dics text-primary '>ask for paradice & projection from fire.</li>
               </div>
            </div>
        </div>
    );
};

export default MenuSidebar;