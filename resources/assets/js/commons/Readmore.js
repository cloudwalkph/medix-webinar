import React, {Component} from 'react';

export default class Readmore extends Component {

	handleClickButton = (e) => {

		let $el, $ps, $up, $p, totalHeight;
		
		totalHeight = 0

		$el = $(e.target);
		$p  = $el.parent();
		$up = $p.parent();
		$ps = $up.find("p:not('.read-more')");
		
		$ps.each(function() {
			totalHeight += $(this).outerHeight(true);
		});
		
		$up
			.css({
			// Set height to prevent instant jumpdown when max height is removed
				"height": $up.height(),
				"max-height": 9999
			})
				.animate({
				"height": totalHeight
			});

		// fade out read-more
		$p.fadeOut();

		// prevent jump-down
		return false;
	}

	render() {
		return (
			<div className="sidebar-box">
				<p>
					Exalt Yahweh our God. Worship at his footstool. He is holy! Moses and Aaron were among his
					priest, Samuel among those who call on his name:they called on Yahweh, and he answered
					them. He spoke to them in the pillar of cloud. They kept his testimonies, the statute that he
					gave them. You answered them. Yahweh our God. You are a God who forgave them, although you took
					vengeance for their doings. Exalt Yahweh, our God. Worship at his holy hill, for Yahweh, Our God
					is Holy! Praise Yahweh Give thanks to Yahweh, for he is good, for his loving kindness
					endures forever. Who can utter the mighty acts of Yahweh, for he is good, for his loving kindness
					endures forever. Who can utter the might acts of Yahweh, or fully declare all his praise?
				</p>
				<p className="read-more">
					<a href="javascript:void(0)" className="btn-flat waves-effect waves-teal" onClick={this.handleClickButton}>Read More</a>
				</p>
			</div>
		)
	}

}