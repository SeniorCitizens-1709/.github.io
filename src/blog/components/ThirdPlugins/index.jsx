import React from 'react'
import { Divider } from 'antd';
import Data from './data.json'
import './index.css'
export default () => {
	return (
		<div>
			<div className="thirdplugins">
				{
					Data.ThirdPlugins.map((item, index) => {
						return (
							<div key={index}>
								<ul>
									<p className="title">{item.title}</p>
									<p className="Typeface Distance">{item.contentone}</p>
									<p className="Typeface Distance">{item.contenttwo}</p>
									<p className="Typeface Distance">{item.contentthree}</p>
									<p className="Typeface Distance">{item.contentfour}</p>
									<p className="Typeface Distance">{item.contentfive}</p>
									<Divider />
								</ul>
							</div>
						)
					})
				}
			</div>
		</div>
	)

}
