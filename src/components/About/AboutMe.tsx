import React from 'react';
import './AboutMe.css';
import { aboutMe } from '../../portfolio';

function Hello() {
	const Fade: any = require("react-reveal/Fade");
	return (
		<Fade duration={800} bottom>
			<section className="section--about" id="aboutMe">
				<div className="inner">

					<div className="wrapper">
						<div className="title">
							<span>{aboutMe.title}</span>
						</div>
						<div className="text-subtitle">
							<span>
								배우고자 하는 호기심을 적극적으로 탐구하고 <br/>
								끊임없이 성장할 수 있는 일을 하고자 개발자를 희망하게 되었습니다.<br/>
								개발 과정에서 직면한 문제를 해결해 나가며, 끊임없이 코드 개선과 최적화에 중점을 두고 있습니다.<br/><br/>

								<li>오늘 배운 내용을 복습하고 정리하는 습관을 가지기 위해 TIL 작성</li>
								<li>Java, API 데이터를 활용한 DB관리, 관련 프로젝트 경험</li>
								<li>jQury, Ajax, Spring F/W 등 다양한 기능 활용한 개발 경험</li>
							</span>
						</div>
					</div>

				</div>
			</section>
		</Fade>
	);
}
export default Hello;