package schema

import "os"

func ReadSchema(path string) (string, error) {
	byt, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}

	return string(byt), nil
}
