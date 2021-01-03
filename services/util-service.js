/* eslint-disable strict */
/* eslint-disable no-new-func */
/* eslint-disable eqeqeq */
/* eslint-disable no-array-constructor */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-sequences */
function gReceiver_(n) {
	function t(n, t) {
		return n << t | n >>> 32 - t;
	}

	function e(n, t) {
		var e, r, o, i, u;
		return o = 2147483648 & n,
			i = 2147483648 & t,
			u = (1073741823 & n) + (1073741823 & t),
			(e = 1073741824 & n) & (r = 1073741824 & t) ? 2147483648 ^ u ^ o ^ i : e | r ? 1073741824 & u ? 3221225472 ^ u ^ o ^ i : 1073741824 ^ u ^ o ^ i : u ^ o ^ i;
	}

	function r(n, r, o, i, u, f, c) {
		return n = e(n, e(e(function (n, t, e) {
			return n & t | ~n & e;
		}(r, o, i), u), c)),
			e(t(n, f), r);
	}
	function o(n, r, o, i, u, f, c) {
		return n = e(n, e(e(function (n, t, e) {
			return n & e | t & ~e;
		}(r, o, i), u), c)),
			e(t(n, f), r);
	}

	function i(n, r, o, i, u, f, c) {
		return n = e(n, e(e(function (n, t, e) {
			return n ^ t ^ e;
		}(r, o, i), u), c)),
			e(t(n, f), r);
	}

	function u(n, r, o, i, u, f, c) {
		return n = e(n, e(e(function (n, t, e) {
			return t ^ (n | ~e);
		}(r, o, i), u), c)),
			e(t(n, f), r);
	}

	function f(n) {
		var t, e = "", r = "";
		for (t = 0; t <= 3; t++)
			e += (r = "0" + (n >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
		return e;
	}

	var c, l, s, a, h, v, p, d, g, m = Array();

	for (m = function (n) {
		for (var t, e = n.length, r = e + 8, o = 16 * ((r - r % 64) / 64 + 1), i = Array(o - 1), u = 0, f = 0; f < e;)
			u = f % 4 * 8,
				i[t = (f - f % 4) / 4] = i[t] | n.charCodeAt(f) << u,
				f++;
		return u = f % 4 * 8,
			i[t = (f - f % 4) / 4] = i[t] | 128 << u,
			i[o - 2] = e << 3,
			i[o - 1] = e >>> 29,
			i;
	}(n = function (n) {
		n = n.replace(/\r\n/g, "\n");
		for (var t = "", e = 0; e < n.length; e++) {
			var r = n.charCodeAt(e);
			r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192),
				t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
					t += String.fromCharCode(r >> 6 & 63 | 128),
					t += String.fromCharCode(63 & r | 128));
		}
		return t;
	}(n)),
		v = 1732584193,
		p = 4023233417,
		d = 2562383102,
		g = 271733878,
		c = 0; c < m.length; c += 16)
		l = v,
			s = p,
			a = d,
			h = g,
			v = r(v, p, d, g, m[c + 0], 7, 3614090360),
			g = r(g, v, p, d, m[c + 1], 12, 3905402710),
			d = r(d, g, v, p, m[c + 2], 17, 606105819),
			p = r(p, d, g, v, m[c + 3], 22, 3250441966),
			v = r(v, p, d, g, m[c + 4], 7, 4118548399),
			g = r(g, v, p, d, m[c + 5], 12, 1200080426),
			d = r(d, g, v, p, m[c + 6], 17, 2821735955),
			p = r(p, d, g, v, m[c + 7], 22, 4249261313),
			v = r(v, p, d, g, m[c + 8], 7, 1770035416),
			g = r(g, v, p, d, m[c + 9], 12, 2336552879),
			d = r(d, g, v, p, m[c + 10], 17, 4294925233),
			p = r(p, d, g, v, m[c + 11], 22, 2304563134),
			v = r(v, p, d, g, m[c + 12], 7, 1804603682),
			g = r(g, v, p, d, m[c + 13], 12, 4254626195),
			d = r(d, g, v, p, m[c + 14], 17, 2792965006),
			v = o(v, p = r(p, d, g, v, m[c + 15], 22, 1236535329), d, g, m[c + 1], 5, 4129170786),
			g = o(g, v, p, d, m[c + 6], 9, 3225465664),
			d = o(d, g, v, p, m[c + 11], 14, 643717713),
			p = o(p, d, g, v, m[c + 0], 20, 3921069994),
			v = o(v, p, d, g, m[c + 5], 5, 3593408605),
			g = o(g, v, p, d, m[c + 10], 9, 38016083),
			d = o(d, g, v, p, m[c + 15], 14, 3634488961),
			p = o(p, d, g, v, m[c + 4], 20, 3889429448),
			v = o(v, p, d, g, m[c + 9], 5, 568446438),
			g = o(g, v, p, d, m[c + 14], 9, 3275163606),
			d = o(d, g, v, p, m[c + 3], 14, 4107603335),
			p = o(p, d, g, v, m[c + 8], 20, 1163531501),
			v = o(v, p, d, g, m[c + 13], 5, 2850285829),
			g = o(g, v, p, d, m[c + 2], 9, 4243563512),
			d = o(d, g, v, p, m[c + 7], 14, 1735328473),
			v = i(v, p = o(p, d, g, v, m[c + 12], 20, 2368359562), d, g, m[c + 5], 4, 4294588738),
			g = i(g, v, p, d, m[c + 8], 11, 2272392833),
			d = i(d, g, v, p, m[c + 11], 16, 1839030562),
			p = i(p, d, g, v, m[c + 14], 23, 4259657740),
			v = i(v, p, d, g, m[c + 1], 4, 2763975236),
			g = i(g, v, p, d, m[c + 4], 11, 1272893353),
			d = i(d, g, v, p, m[c + 7], 16, 4139469664),
			p = i(p, d, g, v, m[c + 10], 23, 3200236656),
			v = i(v, p, d, g, m[c + 13], 4, 681279174),
			g = i(g, v, p, d, m[c + 0], 11, 3936430074),
			d = i(d, g, v, p, m[c + 3], 16, 3572445317),
			p = i(p, d, g, v, m[c + 6], 23, 76029189),
			v = i(v, p, d, g, m[c + 9], 4, 3654602809),
			g = i(g, v, p, d, m[c + 12], 11, 3873151461),
			d = i(d, g, v, p, m[c + 15], 16, 530742520),
			v = u(v, p = i(p, d, g, v, m[c + 2], 23, 3299628645), d, g, m[c + 0], 6, 4096336452),
			g = u(g, v, p, d, m[c + 7], 10, 1126891415),
			d = u(d, g, v, p, m[c + 14], 15, 2878612391),
			p = u(p, d, g, v, m[c + 5], 21, 4237533241),
			v = u(v, p, d, g, m[c + 12], 6, 1700485571),
			g = u(g, v, p, d, m[c + 3], 10, 2399980690),
			d = u(d, g, v, p, m[c + 10], 15, 4293915773),
			p = u(p, d, g, v, m[c + 1], 21, 2240044497),
			v = u(v, p, d, g, m[c + 8], 6, 1873313359),
			g = u(g, v, p, d, m[c + 15], 10, 4264355552),
			d = u(d, g, v, p, m[c + 6], 15, 2734768916),
			p = u(p, d, g, v, m[c + 13], 21, 1309151649),
			v = u(v, p, d, g, m[c + 4], 6, 4149444226),
			g = u(g, v, p, d, m[c + 11], 10, 3174756917),
			d = u(d, g, v, p, m[c + 2], 15, 718787259),
			p = u(p, d, g, v, m[c + 9], 21, 3951481745),
			v = e(v, l),
			p = e(p, s),
			d = e(d, a),
			g = e(g, h);
	return (f(v) + f(p) + f(d) + f(g)).toLowerCase();
};

module.exports.gReceiver_ = gReceiver_;
