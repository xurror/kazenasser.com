package main

import (
	"log"
	"net/http"

	jwtmiddleware "github.com/auth0/go-jwt-middleware/v2"
	"github.com/auth0/go-jwt-middleware/v2/validator"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading the .env file: %v", err)
	}

	router := gin.Default()

	router.GET("/", EnsureValidToken(), func(ctx *gin.Context) {
		claims, ok := ctx.Request.Context().Value(jwtmiddleware.ContextKey{}).(*validator.ValidatedClaims)
		if !ok {
			ctx.AbortWithStatusJSON(
				http.StatusInternalServerError,
				map[string]string{"message": "Failed to get validated JWT claims."},
			)
			return
		}

		// apiClaims, ok := claims.CustomClaims.(*ApiCustomClaims)
		// if !ok {
		// 	ctx.AbortWithStatusJSON(
		// 		http.StatusInternalServerError,
		// 		map[string]string{"message": "Failed to cast custom JWT claims to specific type."},
		// 	)
		// 	return
		// }

		log.Printf("Claims: %v", claims)

		ctx.JSON(http.StatusOK, claims)
	})

	if err := router.Run(":3001"); err != nil {
		log.Fatalf("There was an error with the http server: %v", err)
	}
}
