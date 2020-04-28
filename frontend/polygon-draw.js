var canvas = new fabric.Canvas('canvas');
var polygon_count = 1;
var array_length;
var circle_count = 1;
var fill_color = "rgba(46, 240, 56, 0.5)";

readCoordinates('366,166 366,170 364,172 361,172 357,168 356,168 355,167 355,170 356,170 358,172 357,173 353,173 352,172 352,168 351,168 346,173 342,173 341,172 339,172 338,173 335,173 334,174 330,174 329,175 329,176 330,177 331,176 332,176 333,175 345,175 347,173 349,175 349,178 348,179 348,180 349,181 350,181 351,182 352,181 353,181 352,181 351,180 351,177 352,176 353,176 354,175 356,175 357,176 355,178 354,178 354,179 355,179 357,177 358,177 359,176 358,175 359,174 360,174 361,175 361,176 363,176 364,177 365,177 366,178 368,178 369,179 368,180 365,180 364,181 362,181 360,179 360,178 360,179 358,181 357,181 356,182 355,182 355,184 354,185 354,189 353,190 353,202 352,203 352,222 351,223 351,233 350,234 350,250 349,251 346,248 345,249 344,249 343,248 343,246 342,246 341,245 340,245 337,242 336,242 335,241 335,240 333,240 332,239 334,237 333,236 333,235 334,234 335,234 336,233 336,232 335,231 332,231 331,230 331,227 332,226 335,226 336,227 336,226 335,225 334,225 333,224 333,221 334,220 335,220 335,216 328,216 327,215 327,212 328,211 329,212 330,212 331,213 333,213 334,212 335,212 335,210 334,210 333,209 333,207 334,206 335,206 335,205 334,205 333,204 334,203 335,203 336,202 335,201 334,201 333,200 332,200 331,199 331,198 332,197 333,197 334,196 335,196 333,196 332,195 328,195 327,194 327,193 328,192 331,192 328,192 327,191 330,188 330,187 325,187 324,186 323,186 322,185 323,184 327,184 326,184 325,183 325,179 327,177 327,174 318,174 317,173 317,172 315,170 314,170 313,171 312,171 311,170 311,169 310,170 307,170 306,169 304,169 302,167 299,167 296,170 295,169 294,170 291,170 293,172 292,173 291,173 291,174 293,176 293,177 292,178 291,178 289,180 288,180 287,179 280,179 279,178 278,178 278,179 274,183 272,183 271,182 271,181 269,183 272,186 272,187 271,188 269,188 269,194 270,195 271,195 271,194 274,191 275,191 277,189 278,189 279,188 282,188 283,189 282,190 282,191 281,192 279,192 276,195 276,198 275,199 274,199 276,199 277,198 277,197 279,195 280,196 280,197 281,198 282,198 284,196 285,196 287,194 287,193 288,192 289,192 290,193 290,196 289,197 290,197 292,199 291,200 290,200 291,200 292,199 293,199 294,200 293,201 293,202 292,203 292,206 291,207 290,207 292,207 293,208 292,209 289,209 287,211 291,211 292,210 295,210 298,207 301,207 302,208 301,209 300,209 299,210 299,213 301,215 300,216 298,216 296,214 295,215 293,215 296,215 298,217 301,217 302,218 302,219 300,221 299,221 297,219 296,219 295,220 296,221 298,221 299,222 299,223 301,223 302,224 303,224 303,223 304,222 305,223 305,225 308,225 310,223 311,223 312,224 313,224 316,227 315,228 314,228 313,229 312,229 311,228 311,230 310,231 308,231 307,230 305,230 303,232 301,232 300,233 300,235 303,235 304,234 305,234 305,233 307,231 308,232 312,232 311,231 311,230 312,229 317,229 318,230 318,232 319,233 319,234 320,234 321,235 321,237 320,238 316,238 315,237 312,237 313,237 315,239 317,239 318,240 318,242 320,242 321,243 321,244 320,245 320,249 320,248 321,247 322,247 323,246 325,246 326,247 326,248 324,250 328,250 329,251 327,253 323,253 322,254 319,254 317,256 317,257 318,258 318,260 319,261 321,259 324,259 326,261 325,262 324,262 323,263 322,263 321,264 322,265 323,265 324,266 325,266 326,267 326,271 327,271 327,268 328,267 329,268 330,268 333,271 335,271 336,272 336,274 335,275 333,273 330,273 329,274 329,275 328,276 327,275 327,273 326,274 325,274 324,273 323,273 322,272 320,274 319,274 319,275 320,275 322,277 324,275 326,275 328,277 328,279 329,278 332,278 333,279 332,280 333,281 332,282 331,282 330,281 328,281 327,282 321,282 318,285 319,285 320,286 323,286 324,285 327,285 328,286 330,286 331,287 332,287 333,286 336,286 338,288 337,289 333,289 332,290 331,290 330,289 329,289 328,288 325,288 324,289 322,289 321,290 320,290 319,291 318,291 316,293 317,294 319,294 320,295 319,296 318,296 318,297 315,300 315,303 313,305 312,305 311,306 310,306 310,307 311,308 310,309 310,310 309,311 308,311 308,313 307,314 307,316 309,318 311,318 312,319 314,319 315,320 314,321 309,321 308,322 307,322 306,321 306,320 304,320 302,322 300,322 299,321 298,321 297,320 297,317 298,316 300,316 301,317 302,317 303,318 301,316 301,313 299,313 297,311 297,310 296,309 298,307 299,307 300,308 300,311 301,311 301,308 297,304 294,304 293,303 292,304 290,304 289,303 286,303 286,304 285,305 280,305 278,303 274,303 272,301 272,300 271,299 271,298 270,298 269,297 272,294 274,294 275,293 276,293 277,292 278,292 280,290 280,288 281,287 282,287 282,286 283,285 283,284 280,284 279,285 278,285 277,286 277,287 276,288 275,288 271,292 270,292 269,291 270,292 270,293 269,294 268,293 264,293 263,292 262,293 260,291 259,291 258,290 257,291 256,290 251,290 249,288 250,287 250,286 249,285 251,283 251,280 252,279 252,278 254,276 254,275 258,271 262,271 263,272 270,272 271,273 273,273 274,274 275,273 275,272 276,271 273,271 272,272 271,271 271,270 269,268 269,265 268,265 267,264 268,263 266,261 266,260 267,259 268,259 268,257 267,256 268,255 269,255 268,254 267,255 266,255 265,254 264,254 263,253 262,253 261,252 261,251 260,250 261,249 263,249 263,245 262,244 260,244 259,243 254,243 253,242 251,242 250,243 248,243 247,242 245,242 242,239 240,239 239,240 235,240 233,242 232,242 232,243 231,244 229,242 222,242 222,244 223,245 220,248 220,258 218,260 216,260 213,257 213,253 212,253 211,254 210,254 209,253 208,254 208,255 207,256 209,258 208,259 207,259 206,258 204,258 204,259 203,260 202,259 201,259 200,258 200,260 201,261 205,261 206,262 210,262 212,264 213,263 214,263 215,264 215,265 216,266 216,268 218,270 218,277 219,278 219,279 218,280 218,281 217,282 216,282 215,283 214,283 213,284 211,284 210,283 200,283 199,282 198,282 197,281 196,281 192,277 192,273 191,272 192,271 192,269 191,268 190,268 189,269 189,270 188,271 188,274 189,275 189,277 192,280 192,282 193,283 191,285 182,285 181,286 181,287 180,288 178,288 178,289 177,290 177,293 176,294 175,293 175,294 176,295 177,295 178,296 179,296 181,298 181,299 180,300 176,300 177,300 178,301 176,303 176,305 178,307 177,308 177,309 180,312 178,314 176,314 175,315 175,316 179,316 180,315 181,316 182,316 183,317 183,318 182,319 182,320 184,322 183,323 182,323 182,324 183,324 184,325 184,326 182,328 181,328 183,328 184,329 184,330 183,331 173,331 172,330 169,330 168,329 169,328 171,328 169,326 169,325 168,325 167,324 164,324 163,323 161,325 161,326 162,327 165,327 167,329 168,329 169,330 168,331 166,331 166,335 165,336 164,335 164,334 163,333 163,332 162,331 161,331 160,332 160,333 158,335 158,337 154,341 154,344 153,345 153,348 152,349 153,350 153,354 154,355 154,356 155,357 155,358 158,361 158,362 159,363 160,363 161,364 161,367 162,368 162,369 166,373 167,373 168,374 168,375 170,375 174,379 177,379 178,380 183,380 184,381 185,381 186,382 188,382 189,383 190,383 191,382 193,384 192,385 193,384 194,385 194,390 195,391 198,391 199,390 200,390 201,389 203,389 204,388 205,389 208,389 209,390 210,390 212,392 212,394 211,395 211,396 212,397 213,397 214,398 214,399 216,401 217,401 219,403 219,404 220,404 221,403 222,403 223,404 226,404 227,405 233,405 234,406 238,406 239,407 242,407 243,408 246,408 247,409 248,408 249,408 250,409 252,409 253,408 255,408 256,407 257,407 257,406 258,405 257,404 259,402 261,404 263,404 264,403 265,404 266,403 272,403 276,399 273,399 272,398 271,399 269,397 269,396 270,395 271,396 271,395 270,394 271,393 271,392 272,391 277,391 278,392 276,394 276,396 277,397 278,396 280,396 280,395 281,394 283,396 283,399 283,398 284,397 286,397 288,395 288,394 287,393 287,391 286,390 286,389 288,387 288,386 293,381 293,380 296,377 296,374 295,374 294,373 296,371 297,371 298,370 299,370 299,369 298,368 299,367 299,366 301,364 303,364 304,363 305,364 306,364 307,365 307,364 306,363 304,363 303,362 303,361 302,361 301,360 301,359 303,357 303,355 301,355 297,359 296,359 295,360 294,360 294,361 293,362 292,362 291,361 290,361 288,363 287,362 287,360 288,359 287,360 286,360 286,361 290,365 290,372 289,373 289,375 288,376 287,376 287,378 286,379 285,379 285,380 284,381 282,381 281,380 280,380 279,379 279,377 280,376 280,375 279,374 278,374 277,375 277,376 276,377 275,376 275,377 274,378 273,377 272,377 271,378 270,378 269,379 268,379 266,381 263,381 262,380 262,379 264,377 265,377 268,374 269,374 269,373 271,371 271,370 272,369 273,369 274,368 274,366 272,366 271,367 269,367 268,368 267,367 266,367 265,366 256,366 255,365 253,367 253,368 252,369 251,369 248,366 240,366 239,365 234,365 233,364 232,364 231,365 230,364 230,362 222,362 221,361 221,360 220,360 217,357 217,356 219,354 220,355 223,355 224,356 229,356 230,355 231,355 232,356 233,356 234,357 239,357 240,356 244,356 245,357 247,357 247,356 248,355 255,355 256,354 267,354 268,355 270,355 271,356 270,355 271,354 273,354 274,353 277,353 278,352 279,352 279,351 280,350 281,350 282,349 285,349 285,347 287,345 287,344 291,340 292,340 294,342 295,342 296,343 295,344 296,343 297,343 298,344 296,346 298,348 299,347 299,344 300,343 301,343 303,341 301,341 300,340 300,339 301,338 303,338 303,337 301,337 299,339 296,339 295,340 294,340 293,339 293,338 294,337 294,333 295,332 297,332 297,331 296,331 295,330 295,329 296,328 297,328 296,328 295,327 296,326 297,326 298,325 297,324 299,322 301,322 302,323 303,323 303,322 304,321 305,322 307,322 309,324 309,325 308,326 304,326 303,325 302,326 303,327 302,328 303,328 304,327 305,328 305,329 303,331 301,331 301,332 303,332 304,333 305,333 305,330 306,329 309,329 311,331 311,333 312,334 312,335 311,336 310,336 311,337 311,336 312,335 312,334 311,333 312,332 316,332 319,335 320,335 321,334 324,334 325,335 329,335 331,337 331,338 330,339 326,339 326,340 324,342 324,343 330,343 331,344 330,345 326,345 325,346 324,346 323,345 322,345 322,346 323,347 328,347 330,349 330,352 329,353 330,353 333,350 334,351 336,351 337,352 338,351 341,351 342,352 343,352 344,353 347,353 349,355 350,354 352,354 352,352 353,351 355,353 355,352 354,352 353,351 353,348 354,347 355,348 355,349 356,349 357,350 359,350 361,352 362,352 363,351 365,351 366,352 367,352 368,351 369,351 370,352 371,352 372,351 373,351 374,350 377,350 378,349 381,349 382,348 383,348 384,349 386,349 387,350 390,350 390,349 389,348 389,347 390,346 391,346 392,347 393,347 394,348 395,348 396,349 397,349 398,348 399,348 400,347 401,347 402,348 404,348 405,347 413,347 415,349 415,350 414,351 413,351 412,352 407,352 406,353 405,352 404,352 403,353 397,353 396,354 392,354 391,355 388,355 387,356 384,356 383,357 381,357 380,358 377,358 376,357 373,357 371,359 367,359 366,360 358,360 356,358 355,358 354,357 354,356 353,356 353,357 352,358 352,359 349,362 347,362 345,364 344,364 342,366 341,366 336,371 335,371 332,374 331,374 328,377 328,378 326,380 326,381 325,382 324,382 324,383 323,384 324,385 323,386 322,386 321,385 321,384 319,386 320,386 321,387 319,389 319,391 318,392 317,391 317,388 314,388 311,391 310,390 309,390 308,391 307,390 306,390 306,391 307,392 306,393 305,393 304,392 304,393 303,394 303,395 302,396 302,397 303,398 305,398 307,396 307,394 308,393 309,393 311,391 312,391 313,390 314,390 315,391 315,393 314,394 315,394 316,393 317,393 318,392 319,393 319,394 320,395 320,396 319,397 318,397 318,398 316,400 315,400 318,400 319,399 321,399 321,398 322,397 323,398 325,398 326,397 330,397 331,396 332,397 333,397 335,399 336,398 337,399 337,402 338,402 339,401 340,401 341,402 346,402 347,401 348,402 350,402 351,403 354,403 355,404 356,404 357,403 358,403 359,404 363,404 364,403 367,403 368,402 369,402 370,401 371,402 372,402 373,401 375,401 375,396 378,393 380,395 380,396 378,398 377,398 377,401 379,399 380,399 381,400 383,400 384,399 387,399 388,398 391,398 392,397 394,397 396,395 396,392 395,391 395,390 396,389 397,389 399,391 403,391 404,390 405,391 406,391 407,390 407,389 408,388 409,388 410,389 410,391 411,392 410,393 410,395 411,394 413,394 414,395 418,395 418,387 417,386 417,385 418,384 418,383 419,382 419,379 418,378 418,377 416,377 415,376 416,375 418,375 418,374 419,373 419,371 424,366 425,366 427,364 428,364 429,363 430,363 431,362 432,363 435,363 436,362 439,362 440,363 442,363 443,364 444,364 445,363 444,363 442,361 443,360 444,360 446,358 447,358 447,357 448,356 450,358 452,358 453,359 455,359 456,360 456,363 452,367 453,367 454,368 453,369 453,370 455,372 455,373 454,374 455,374 456,373 457,374 457,375 456,376 457,376 459,378 459,380 462,383 461,384 459,384 463,384 463,383 464,382 465,383 470,383 469,382 468,382 465,379 465,378 464,378 463,377 463,375 464,374 467,374 468,373 467,372 466,372 465,371 465,368 466,367 466,365 467,364 465,364 463,362 463,359 463,360 462,361 460,361 459,360 459,358 460,357 460,356 462,354 464,356 464,357 465,356 467,356 468,357 467,358 467,359 468,359 469,360 469,358 470,357 471,357 472,358 473,357 474,358 474,359 473,360 473,364 472,365 472,366 473,367 472,368 472,369 471,370 471,371 470,372 470,373 471,374 471,375 472,376 472,377 473,378 473,379 472,380 472,381 479,381 480,382 484,382 485,383 487,383 488,382 492,382 493,381 488,381 487,380 487,379 489,377 488,376 488,373 487,374 485,374 484,375 483,375 483,376 482,377 480,377 479,376 479,371 478,371 476,369 475,369 474,368 475,367 476,367 476,366 478,364 478,363 477,362 478,361 478,359 479,358 480,359 480,360 481,359 480,359 479,358 479,355 480,354 481,354 483,356 483,357 484,357 485,356 484,355 482,355 481,354 481,352 478,352 477,351 478,350 469,350 468,349 469,348 469,347 468,347 467,346 468,345 473,345 474,346 475,346 476,345 480,345 481,346 481,347 482,347 482,346 484,344 486,346 486,348 487,349 487,351 489,351 490,352 490,353 491,353 491,352 488,349 489,348 488,347 489,346 491,346 492,347 492,348 494,348 495,349 495,350 494,351 494,352 496,354 495,355 494,355 494,357 495,358 496,358 498,360 499,360 500,361 500,363 499,364 498,363 498,364 499,364 500,365 500,366 500,365 501,364 502,364 503,365 503,367 504,368 506,368 508,370 507,371 505,371 504,370 503,371 502,370 501,371 501,373 502,373 504,371 509,371 511,369 512,369 516,373 521,373 522,374 523,374 524,375 526,375 527,376 531,376 531,374 532,373 532,372 533,371 534,371 535,370 536,371 537,371 538,372 539,372 537,370 537,366 538,365 538,364 539,363 539,362 541,360 543,360 542,360 541,359 542,358 546,358 547,359 548,358 549,359 550,359 551,358 555,358 556,357 557,357 558,356 558,355 557,355 556,356 552,356 551,355 551,354 552,353 551,352 552,351 551,350 551,349 551,351 550,352 546,352 545,351 545,349 546,348 544,348 543,349 542,349 541,348 538,348 537,347 533,347 532,346 533,345 534,345 536,343 539,343 540,344 541,344 542,345 543,345 544,344 545,345 547,345 548,346 552,346 553,347 553,348 554,349 554,350 558,350 559,351 558,352 556,352 560,352 566,358 566,359 568,361 568,364 569,364 571,366 571,361 572,360 572,359 573,358 574,359 574,361 575,360 574,359 576,357 577,358 578,357 579,357 580,358 580,360 579,361 578,361 577,362 577,363 579,363 580,362 582,364 583,364 584,365 585,364 586,364 587,363 589,363 590,364 591,363 590,362 589,362 588,361 587,361 585,359 586,358 587,358 588,357 591,357 592,358 593,357 595,357 597,359 595,361 595,362 594,363 594,364 595,365 597,363 599,363 599,361 600,360 601,360 600,359 602,357 602,356 603,355 603,354 605,352 605,351 606,350 606,349 607,348 608,348 608,346 607,345 607,343 606,342 606,341 607,340 607,337 608,336 608,334 609,333 611,335 612,334 613,335 613,336 614,335 615,336 614,335 614,333 615,332 616,333 617,333 618,334 619,334 618,334 615,331 614,331 613,330 613,328 614,327 615,328 616,328 618,330 621,330 622,331 622,332 621,333 623,333 623,332 624,331 625,331 626,332 627,332 627,329 628,328 627,328 626,329 624,329 624,330 623,331 622,331 621,330 621,329 620,328 619,328 618,327 618,325 617,324 618,323 618,321 617,321 617,322 616,323 616,324 614,326 613,326 613,327 612,328 612,331 610,333 607,333 606,334 606,335 607,336 607,340 606,341 604,339 604,338 603,337 603,336 602,336 601,335 601,334 600,334 598,332 598,331 597,330 597,329 598,328 597,327 598,326 598,325 599,324 599,323 598,322 598,319 599,318 601,320 601,323 602,323 603,322 603,321 604,320 605,320 603,320 602,319 603,318 606,318 607,319 608,318 609,318 611,316 611,313 612,312 611,311 612,310 612,306 614,304 614,300 615,299 615,294 614,293 614,292 615,291 615,289 614,288 614,287 615,286 616,287 615,286 615,285 614,284 614,281 610,281 609,282 608,281 607,282 606,282 605,281 603,281 602,280 601,280 600,281 599,281 598,280 598,278 599,277 599,276 602,273 603,273 603,269 604,268 605,268 608,265 609,265 609,264 612,261 613,262 614,261 614,259 613,258 613,254 613,258 614,259 612,261 611,261 610,262 609,262 609,263 608,264 608,265 605,268 604,268 603,269 603,272 602,273 599,273 597,275 598,276 598,277 597,278 596,278 596,280 597,280 603,286 603,288 599,292 598,292 597,293 597,295 593,299 593,300 592,301 591,301 590,300 590,296 591,295 591,294 590,294 589,295 589,298 588,299 588,302 591,302 592,303 591,304 591,305 592,304 592,302 593,301 593,300 597,296 599,296 600,295 600,294 601,293 603,295 605,295 605,294 603,294 602,293 602,291 603,290 603,289 604,288 604,287 605,286 605,285 607,283 608,284 610,284 611,285 612,285 614,287 614,289 612,291 612,292 613,293 613,294 611,296 609,296 609,299 608,300 608,301 607,302 607,303 606,304 605,304 604,305 604,306 603,307 601,307 601,310 599,312 599,313 598,314 598,317 597,318 597,321 598,322 598,325 597,326 597,327 596,328 595,328 595,329 596,330 596,331 597,332 597,333 598,334 598,335 599,335 600,336 600,337 605,342 605,343 606,344 604,346 604,347 603,348 602,348 601,347 600,347 602,349 602,350 604,350 605,351 605,352 603,354 603,355 601,357 600,356 600,353 598,355 599,356 599,357 600,358 598,360 595,357 594,357 593,356 592,356 591,355 590,355 589,354 589,353 591,351 592,351 593,350 591,348 590,349 589,349 587,347 589,345 588,345 586,347 585,347 583,345 582,345 581,344 582,343 584,343 584,341 583,340 583,339 582,338 582,336 579,333 579,330 581,328 583,328 584,327 589,327 590,328 590,329 592,331 593,331 593,329 592,328 592,325 591,324 588,324 588,325 587,326 586,326 585,325 585,324 586,323 586,321 585,322 584,321 584,320 585,319 583,317 583,316 582,316 580,314 580,312 581,311 581,308 583,306 585,306 587,308 587,309 586,310 587,310 587,309 588,308 589,309 589,308 587,308 586,307 586,305 587,304 586,304 585,305 584,305 582,303 582,299 581,299 579,301 578,301 576,303 575,302 575,301 574,301 572,299 572,298 574,296 575,296 575,295 574,294 573,294 571,292 570,292 569,291 569,290 568,289 568,288 567,287 567,284 566,283 565,283 564,282 564,280 565,279 565,278 566,277 567,277 567,276 566,276 564,274 565,273 566,273 567,274 567,273 568,272 569,272 567,272 566,271 564,271 562,269 562,266 563,265 562,264 562,262 564,260 567,260 568,259 569,259 568,259 567,258 566,258 565,257 563,257 562,256 562,255 561,255 560,254 559,255 558,255 557,254 557,253 558,252 559,252 559,251 560,250 563,250 563,249 562,248 560,248 559,247 559,242 560,241 559,241 558,240 559,239 559,238 557,236 554,236 552,234 552,233 555,230 559,230 560,231 559,232 556,232 557,233 558,232 559,232 560,231 561,231 561,229 560,228 559,228 558,227 556,227 555,228 554,228 552,230 549,227 552,224 553,224 554,223 557,223 558,224 559,224 560,225 562,225 564,223 566,223 565,222 565,221 563,221 562,222 561,221 560,221 559,220 559,216 560,215 561,215 562,216 562,217 563,216 562,215 562,214 560,212 560,211 559,210 559,208 560,207 561,208 562,208 562,207 563,206 565,208 566,208 566,207 567,206 568,207 568,208 569,207 570,207 572,209 572,210 571,211 573,213 573,214 574,215 573,216 572,216 571,215 569,215 571,215 575,219 575,220 577,222 577,223 578,224 578,225 580,227 580,229 579,230 578,229 578,228 577,229 579,231 580,231 581,232 581,237 582,237 583,236 584,237 584,238 583,239 582,239 582,247 583,247 585,245 586,246 586,249 584,251 583,250 583,249 583,254 584,255 584,256 586,254 587,254 589,256 589,260 588,261 588,262 589,261 592,264 590,266 590,270 591,271 591,272 595,276 595,275 594,274 594,271 593,270 593,269 592,268 592,263 590,261 590,260 589,259 589,254 587,254 586,253 586,251 587,250 587,248 588,247 589,247 590,248 590,249 589,250 589,251 590,251 590,248 589,247 589,246 587,244 587,242 585,240 585,236 586,235 587,235 588,236 591,236 599,244 600,244 601,245 602,245 605,248 603,250 603,251 602,252 601,252 600,251 600,250 599,251 599,252 600,251 601,252 601,253 602,253 606,249 608,251 608,253 611,250 612,251 612,252 612,250 610,250 609,249 608,249 607,248 605,248 604,247 604,246 603,245 602,245 601,244 600,244 599,243 599,242 598,242 595,239 595,238 593,238 591,236 590,236 589,235 588,235 587,234 586,234 584,232 584,228 585,227 585,226 585,227 584,228 583,227 583,226 582,225 582,224 579,221 579,219 578,218 578,214 577,213 577,212 576,211 576,210 573,207 573,205 572,205 568,201 566,201 563,198 560,198 560,199 559,200 558,200 557,199 557,197 554,197 552,195 552,194 551,193 551,192 549,192 543,186 543,185 541,185 540,184 539,184 538,183 537,183 533,179 528,179 527,178 526,178 525,177 523,177 522,178 520,178 521,179 525,179 526,180 526,182 524,184 524,185 523,186 519,186 520,187 520,188 525,188 526,189 526,190 524,192 525,193 527,193 528,192 529,192 530,191 532,191 534,189 535,189 536,190 537,190 538,191 537,192 536,192 536,195 537,194 536,193 537,192 538,192 539,191 540,191 541,192 542,192 544,194 545,194 546,195 547,194 549,194 551,196 549,198 547,198 547,199 548,199 550,201 551,201 552,202 552,203 551,204 549,204 548,203 547,203 546,202 544,202 543,201 542,202 539,202 538,201 538,200 532,200 531,199 528,199 527,198 527,197 526,197 525,196 521,196 520,197 521,198 521,199 520,200 519,200 520,201 522,201 523,202 523,205 522,206 520,206 520,207 519,208 518,208 519,208 520,209 520,210 521,210 523,212 524,212 525,213 524,214 520,214 519,213 519,212 517,214 518,215 517,216 516,216 515,215 515,213 514,213 513,214 514,215 513,216 512,216 511,215 511,214 510,214 509,215 504,215 503,216 502,216 501,217 502,218 503,218 503,216 504,215 508,215 509,216 509,218 508,219 507,219 506,220 506,221 507,222 508,222 510,220 513,220 516,223 517,222 517,220 516,219 518,217 519,217 520,218 527,218 528,219 526,221 520,221 520,222 522,222 523,223 524,222 527,222 528,223 527,224 528,223 529,223 530,224 528,226 529,227 530,227 532,229 531,230 528,230 527,229 527,228 525,228 524,229 523,229 522,230 523,231 524,231 525,232 524,233 523,233 522,234 520,234 519,235 517,235 516,236 516,239 513,242 514,243 514,244 515,245 514,246 514,247 515,247 516,248 518,248 517,247 519,245 519,243 520,242 521,242 522,241 527,241 528,242 529,241 530,241 531,240 532,240 533,239 537,239 537,235 536,234 534,234 531,231 531,230 532,229 536,229 537,230 538,230 539,231 540,231 541,232 542,232 544,234 544,237 543,238 541,238 540,239 539,239 543,239 544,240 547,237 550,240 550,241 548,243 544,243 543,242 541,242 540,243 538,243 537,244 536,244 535,245 534,245 533,246 532,246 531,245 530,245 529,244 525,244 525,245 527,247 528,246 529,246 530,247 530,250 529,251 528,251 527,250 526,250 524,248 520,248 523,251 523,252 524,253 525,253 526,254 528,254 531,257 531,258 529,260 528,260 527,259 525,259 524,260 523,260 521,262 520,262 519,261 515,261 514,260 512,260 512,261 519,261 520,262 520,263 522,263 523,264 525,264 526,263 527,263 527,262 528,261 530,263 530,265 529,266 528,266 527,267 526,267 526,268 525,269 523,269 521,267 517,267 516,266 512,266 512,267 511,268 510,268 511,268 512,267 514,267 516,269 518,269 519,270 520,270 521,271 520,272 517,272 515,274 513,274 512,273 511,273 507,277 506,277 505,276 505,274 506,273 506,272 505,272 503,270 505,268 504,268 503,269 501,269 500,268 500,267 496,267 495,266 494,266 493,267 492,267 491,268 488,268 487,267 487,266 486,266 485,265 484,265 482,267 481,266 480,266 479,265 479,262 476,262 474,260 474,259 472,259 471,258 470,258 468,256 469,255 470,255 470,254 469,253 468,254 465,254 464,253 462,253 461,254 461,255 460,256 459,256 458,257 454,257 453,256 454,255 455,255 456,254 457,254 456,253 456,252 457,251 459,251 460,250 464,250 466,248 467,248 469,250 470,250 469,249 469,248 465,248 464,247 464,245 465,244 464,243 457,243 455,241 455,240 453,238 454,237 455,237 456,236 458,236 459,235 460,236 466,236 467,237 467,241 468,241 470,239 476,239 475,238 472,238 471,239 470,239 469,238 468,238 467,237 469,235 470,235 473,232 472,231 470,231 469,230 471,228 472,229 473,228 472,227 469,227 468,226 468,225 469,224 471,224 472,223 474,223 475,224 477,224 476,224 475,223 477,221 479,221 479,219 477,219 476,220 475,220 474,221 472,221 471,220 471,217 472,216 474,216 474,214 473,213 472,213 471,212 471,210 472,209 473,209 474,208 472,208 471,207 471,206 472,205 472,204 469,201 469,200 464,200 464,201 465,202 465,203 464,204 462,204 461,203 461,201 460,200 458,200 458,205 457,206 456,206 456,207 457,207 457,206 458,205 460,207 461,207 462,208 462,209 465,209 468,212 468,213 466,215 471,215 472,216 469,219 468,219 467,220 464,220 463,219 463,217 464,216 463,215 462,215 460,213 459,213 459,216 458,217 456,217 455,216 455,215 448,215 447,216 445,214 445,212 446,211 445,210 444,211 444,213 442,215 441,214 440,214 439,213 439,207 441,205 442,205 443,206 444,206 445,207 446,207 447,206 451,206 452,205 453,205 453,204 452,203 450,203 449,202 446,202 445,201 444,202 443,202 442,203 439,200 440,199 444,199 444,197 440,197 439,196 439,195 439,196 440,197 440,199 439,200 438,200 437,199 436,199 435,198 434,198 433,197 433,194 434,193 437,193 437,192 436,191 435,191 434,192 433,192 431,194 430,193 429,193 428,194 428,200 427,201 426,201 425,202 422,202 420,200 420,195 421,194 421,193 420,192 420,191 419,190 419,189 418,190 416,190 415,189 417,187 417,186 416,187 414,187 413,186 412,186 411,187 410,187 407,184 408,183 410,183 411,184 413,184 414,183 415,183 415,180 416,179 417,179 415,179 414,180 414,183 413,184 411,184 410,183 410,182 409,181 408,181 407,182 406,182 405,181 404,182 403,182 402,183 400,183 399,184 398,184 396,182 395,183 394,183 393,184 392,184 391,185 389,185 388,184 386,184 385,183 385,182 383,180 383,179 379,179 379,181 378,182 377,181 377,180 376,179 375,179 374,178 375,177 371,177 370,176 371,175 373,175 371,173 371,171 369,169 368,169 366,167 ')

drawPolygon();

function readCoordinates(coordinates){
  let coordinate_pairs = coordinates.split(" ");
  let index;
  for(index = 0; index < coordinate_pairs.length; index++){
    if(index % 30 == 0){
      addCircle(coordinate_pairs[index].split(',')[0], coordinate_pairs[index].split(',')[1]);
    }
  }
}

function addCircle(x,y){
  circle = new fabric.Circle({
    left: x,
    top: y,
    radius: 7,
    hasBorders: false,
    hasControls: false,
    polygonNo: polygon_count,
    name: "draggableCircle",
    circleNo: circle_count,
    fill: "rgba(0, 0, 0, 0.5)",
    hasRotatingPoint: false,
    originX: 'center',
    originY: 'center'
  });
  canvas.add(circle);
  circle_count++;
}

canvas.on('object:moving', function(option) {
  var object = option.target;
  canvas.forEachObject(function(obj) {
    if (obj.name == "Polygon") {
      if (obj.PolygonNumber == object.polygonNo) {
        var points = window["polygon" + object.polygonNo].get("points");
        points[object.circleNo - 1].x = object.left;
        points[object.circleNo - 1].y = object.top;
        window["polygon" + object.polygonNo].set({
          points: points
        });
      }
    }
  })
});

function drawPolygon() {
  array_length = circle_count;
  circle_count = 1;
  var objects = canvas.getObjects();
  var points = [];
  for (var i = 0; objects.length > i; i++) {
    if (objects[i].polygonNo === polygon_count) {
      points.push({
        x: objects[i].left,
        y: objects[i].top
      });
      canvas.renderAll();
    }
  }
  window["polygon" + polygon_count] = new fabric.Polygon(points, {
    fill: fill_color,
    PolygonNumber: polygon_count,
    name: "Polygon",
    selectable: false,
    noofcircles: array_length,
    objectCaching: false
  });
  canvas.add(window["polygon" + polygon_count]);
  canvas.sendToBack(window["polygon" + polygon_count])
  canvas.renderAll();
  polygon_count++;
}
