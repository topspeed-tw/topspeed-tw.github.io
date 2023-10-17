function pr() {
                var t, e, n, o, i, d, c, w, r, a, l, h = document.getElementById("ppc"), s = document.getElementById("pp");
                function g(t, e, n, o) {
                    var i = t / 2;
                    return {
                        wPct: e = 1 + ((e = 1 + (e - 1) * (1 - t)) - 1) * (1 - i),
                        topPct: n -= i,
                        leftPct: o *= 1 - (t + i)
                    }
                }
                h && s && (t = (o = h.getBoundingClientRect()).width,
                e = o.height,
                r = (l = JSON.parse(h.dataset.dim)).a,
                c = l.b,
                n = l.c,
                a = l.d,
                w = r / (d = r * l.e),
                o = (i = r * a) / d,
                o = (i - ((h = t / e) - 1) * d / 2) / (a = d * h),
                i = i = c * n / (c * l.f),
                l = (d = t * (w = r / a)) / (n = r / c),
                a = e * Math.abs(i),
                r = t * o,
                w <= 1 && (c = 1 - w,
                i *= (w = 1) + c * h,
                o = 0),
                (r = d - r) < t && (w += (r = t - r) / d,
                o -= r / t / 2),
                a = (l = l - e - a) / e,
                h < 1 && 1 < n && 0 < l && (t * (l = g(a, w, i, o)).wPct / n - e * Math.abs(l.topPct) < e && !(e < t * (l = g(a / 4, w, i, o)).wPct / n - e * Math.abs(l.topPct)) || (w = l.wPct,
                i = l.topPct,
                o = l.leftPct)),
                s.style.width = "".concat(100 * w, "%"),
                s.style.left = "-".concat(100 * o, "%"),
                s.style.top = "-".concat(100 * i, "%"))
            }
            console.log("window.innerWidth", window.innerWidth),
            console.log("window.outerWidth", window.outerWidth),
            console.log("window.innerHeight", window.innerHeight),
            console.log("window.outerHeight", window.outerHeight),
            window.addEventListener("DOMContentLoaded", function() {
                pr()
            }),
            window.addEventListener("resize", function() {
                pr()
            })