import { NavItem } from "configs/NavigationConfig";


class Utils {

	/**
	 * Get first character from first & last sentences of a username
	 * @param {String} name - Username
	 * @return {String} 2 characters string
	 */
	static getNameInitial(name: { match: (arg0: RegExp) => never[]; }) {
		let initials = name.match(/\b\w/g) || [];
		return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
	}


	static getRouteInfo(navTree: NavItem[], path: string): NavItem | null {
		const findPath = (items: NavItem[]) => {
			items.forEach((item) => {
				if (item.path && item.path === path) {
					return item;
				}
				if (item.submenu) {
					findPath(item.submenu);
				}
			});
		};
		findPath(navTree);
		return null;
	};

	/**
	 * Get accessible color contrast
	 * @param {String} hex - Hex color code e.g '#3e82f7'
	 * @return {String} 'dark' or 'light'
	 */
	static getColorContrast(hex: string) {
		if (!hex) {
			return 'dark'
		}
		const threshold = 130;
		const hRed = hexToR(hex);
		const hGreen = hexToG(hex);
		const hBlue = hexToB(hex);
		function hexToR(h: any) { return parseInt((cutHex(h)).substring(0, 2), 16) }
		function hexToG(h: any) { return parseInt((cutHex(h)).substring(2, 4), 16) }
		function hexToB(h: any) { return parseInt((cutHex(h)).substring(4, 6), 16) }
		function cutHex(h: string) { return (h.charAt(0) === '#') ? h.substring(1, 7) : h }
		const cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
		if (cBrightness > threshold) {
			return 'dark'
		} else {
			return 'light'
		}
	}

	/**
	 * Darken or lighten a hex color 
	 * @param {String} color - Hex color code e.g '#3e82f7'
	 * @param {Number} percent - Percentage -100 to 100, positive for lighten, negative for darken
	 * @return {String} Darken or lighten color 
	 */
	static shadeColor(color: string, percent: number) {
		let R = parseInt(color.substring(1, 3), 16);
		let G = parseInt(color.substring(3, 5), 16);
		let B = parseInt(color.substring(5, 7), 16);
		R = (R * (100 + percent) / 100);
		G = (G * (100 + percent) / 100);
		B = (B * (100 + percent) / 100);
		R = (R < 255) ? R : 255;
		G = (G < 255) ? G : 255;
		B = (B < 255) ? B : 255;
		const RR = ((R.toString(16).length === 1) ? `0${R.toString(16)}` : R.toString(16));
		const GG = ((G.toString(16).length === 1) ? `0${G.toString(16)}` : G.toString(16));
		const BB = ((B.toString(16).length === 1) ? `0${B.toString(16)}` : B.toString(16));
		return `#${RR}${GG}${BB}`;
	}

	/**
	 * Convert RGBA to HEX 
	 * @param {String} rgba - RGBA color code e.g 'rgba(197, 200, 198, .2)')'
	 * @return {String} HEX color 
	 */
	static rgbaToHex(rgba: string) {
		const trim = (str: string) => (str.replace(/^\s+|\s+$/gm, ''))
		const inParts = rgba.substring(rgba.indexOf("(")).split(","),
			r = parseInt(trim(inParts[0].substring(1)), 10),
			g = parseInt(trim(inParts[1]), 10),
			b = parseInt(trim(inParts[2]), 10),
			a = parseFloat(trim(inParts[3].substring(0, inParts[3].length - 1)));
		const outParts = [
			r.toString(16),
			g.toString(16),
			b.toString(16),
			Math.round(a * 255).toString(16).substring(0, 2)
		];

		outParts.forEach(function (part, i) {
			if (part.length === 1) {
				outParts[i] = '0' + part;
			}
		})
		return (`#${outParts.join('')}`);
	}

	/**
	 * Returns either a positive or negative 
	 * @param {Number} number - number value
	 * @param {any} positive - value that return when positive
	 * @param {any} negative - value that return when negative
	 * @return {any} positive or negative value based on param
	 */
	static getSignNum(number: number, positive: any, negative: any) {
		if (number > 0) {
			return positive
		}
		if (number < 0) {
			return negative
		}
		return null
	}



	/**
	 * Filter array of object 
	 * @param {Array} list - array of objects that need to filter
	 * @param {String} key - object key target
	 * @param {any} value  - value that excluded from filter
	 * @return {Array} a value minus b value
	 */
	static filterArray(list: any[], key: string | number, value: any) {
		let data = list
		if (list) {
			data = list.filter((item: { [x: string]: any; }) => item[key] === value)
		}
		return data
	}

	/**
	 * Remove object from array by value
	 * @param {Array} list - array of objects
	 * @param {String} key - object key target
	 * @param {any} value  - target value
	 * @return {Array} Array that removed target object
	 */
	static deleteArrayRow(list: any[], key: string | number, value: any) {
		let data = list
		if (list) {
			data = list.filter((item: { [x: string]: any; }) => item[key] !== value)
		}
		return data
	}

	/**
	 * Wild card search on all property of the object
	 * @param {Number | String} input - any value to search
	 * @param {Array} list - array for search
	 * @return {Array} array of object contained keyword
	 */
	static wildCardSearch(list: any[], input: { toString: () => string; }) {
		const searchText = (item: { [x: string]: { toString: () => string; }; }) => {
			for (let key in item) {
				if (item[key] == null) {
					continue;
				}
				if (item[key].toString().toUpperCase().indexOf(input.toString().toUpperCase()) !== -1) {
					return true;
				}
			}
		};
		list = list.filter((value: any) => searchText(value));
		return list;
	}

	/**
	 * Get Breakpoints
	 * @param {Record<string, boolean>} screens - Grid.useBreakpoint() from antd
	 * @returns {string[]} Array of breakpoint sizes
	 */
	static getBreakpoints(screens: Record<string, boolean>): string[] {
		return Object.entries(screens)
			.filter(([_, value]) => value)
			.map(([key]) => key);
	}

}

export default Utils;